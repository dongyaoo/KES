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
import { postFileCreate, postHpnNerForSingleFake, getHpnNerForManyFake } from './service';
import styles from './style.less';
import ProCard from '@ant-design/pro-card';
import EntityTable from './table';

// export interface ContextProps {
//   entity: object[];
// }

export const EntityContext = createContext<any>([]);
const Form: FC<Record<string, any>> = () => {
  const [entityList, setEntityList] = useState<object[]>();
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
    if (values.queryMode == '1') {
      const query = values.faultText;
      const { data }: any = await postHpnNerForSingleFake({ query: query });
      setEntityList([{ key: query, faultText: query, head: data[0][0], tail: data[0][1] }]);
    } else {
      const fileObj = values.faultFile[0];
      await run({ file: fileObj.originFileObj });
      const { data }: any = await getHpnNerForManyFake();
      setEntityList(
        data.map((item: any, index: number) => {
          return { key: `${item[0] + index}`, faultText: item[0], head: item[1], tail: item[2] };
        }),
      );
    }
  };

  return (
    <PageContainer content="域自适应知识抽取命名实体识别任务">
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
            <ProFormRadio.Group
              options={[
                {
                  value: '1',
                  label: '单查询',
                },
                {
                  value: '2',
                  label: '批查询',
                },
              ]}
              label="查询模式"
              name="queryMode"
            />
            <ProFormDependency name={['queryMode']}>
              {({ queryMode }) => {
                return queryMode && queryMode === '1' ? (
                  <ProFormTextArea
                    label="故障文本"
                    width="xl"
                    name="faultText"
                    initialValue={
                      '一辆行驶里程超30万km，配置V6发动机和4T65 E型自动变速器的2001款上海通用别克GL8商务车;用户反映：该车行驶时加速无力，'
                    }
                    rules={[
                      {
                        required: true,
                        message: '请输入故障文本',
                      },
                    ]}
                    placeholder="故障文本"
                  />
                ) : (
                  queryMode === '2' && (
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
                  )
                );
              }}
            </ProFormDependency>
          </ProForm>
        </ProCard>
        <ProCard colSpan={16}>
          <EntityContext.Provider value={entityList}>
            <EntityTable />
          </EntityContext.Provider>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Form;
