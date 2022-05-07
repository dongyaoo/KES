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
import { postFileCreate, getDpcnRcForManyFake } from './service';
import styles from './style.less';
import ProCard from '@ant-design/pro-card';
import RelationTable from './table';

// export interface ContextProps {
//   entity: object[];
// }

export const RelationContext = createContext<any>([]);
const NerCard: FC<Record<string, any>> = () => {
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
    const { data }: any = await getDpcnRcForManyFake();
    setRelationList(
      data.map((item: any, index: number) => {
        return {
          key: `${item[0] + index}`,
          faultText: item[0],
          head: item[1],
          tail: item[2],
          relation: item[3],
        };
      }),
    );
  };

  return (
    <PageContainer content="元学习知识抽取关系分类任务">
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
              label="故障数据文件"
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
            <RelationTable />
          </RelationContext.Provider>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default NerCard;
