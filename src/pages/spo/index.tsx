import { message } from 'antd';
import ProForm, {
  ProFormUploadDragger,
  ProFormDependency,
  ProFormRadio,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { FC, useRef, useState } from 'react';
import { createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { postFileCreate, getSpoTable } from './service';
import styles from './style.less';
import ProCard from '@ant-design/pro-card';
import SPOGraph from './graph/index';
// export interface ContextProps {
//   entity: object[];
// }

export const RelationContext = createContext<any>([]);
const Form: FC<Record<string, any>> = () => {
  const [relationList, setRelationList] = useState<object[]>();
  // 手动上传文件
  const { run } = useRequest(postFileCreate, {
    manual: true,
    onSuccess: (_, params) => {
      message.success(`${params[0]['file'].name} 上传成功`);
    },
    onError: (error, params) => {
      message.error(`${params[0]['file'].name} 上传失败`);
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    const fileObj = values.faultFile[0];
    await run({ file: fileObj.originFileObj });
    const { data }: any = await getSpoTable({ model: 'wxg' });
    setRelationList(
      data.map((item: any, index: number) => {
        return {
          key: `${item[0] + index}`,
          head: item[0],
          tail: item[1],
          relation: item[2],
        };
      }),
    );
  };

  return (
    <PageContainer content="知识三元组可视化">
      <ProCard gutter={8} style={{ height: 650 }}>
        <ProCard colSpan={8}>
          <ProForm
            hideRequiredMark
            style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
            name="basic"
            layout="vertical"
            initialValues={{ public: '1' }}
            onFinish={onFinish}
          >
            <ProFormUploadDragger
              label="知识三元组数据文件"
              name="faultFile"
              action="/api/file/create"
              max={1}
              // beforeUpload 返回 true 会直接传递 File 对象
              fieldProps={{
                name: 'file',
                beforeUpload(file): boolean {
                  return false;
                },
              }}
            />
          </ProForm>
        </ProCard>
        <ProCard colSpan={16}>
          <RelationContext.Provider value={relationList}>
            <SPOGraph />
          </RelationContext.Provider>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Form;
