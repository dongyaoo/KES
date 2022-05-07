import { message } from 'antd';
import ProForm, {
  ProFormUploadDragger,
  ProFormText,
  ProFormRadio,
  ProFormTextArea,
  ProFormSelect,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { FC, useRef, useState } from 'react';
import { createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { getAlNer } from './service';
import styles from './style.less';
import ProCard from '@ant-design/pro-card';
import Record from './timeline';

// export interface ContextProps {
//   entity: object[];
// }

export const RecordContext = createContext<any>([]);
const Form: FC<Record<string, any>> = () => {
  const [record, setRecord] = useState<string[]>();

  const onFinish = async (values: Record<string, any>) => {
    const { data }: any = await getAlNer(values);
    setRecord(
      data.map((item: any, index: number) => {
        return { key: `${item[0] + index}`, text: item };
      }),
    );
  };

  return (
    <PageContainer content="交互式主动学习知识抽取模型训练">
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
            <ProFormSelect
              width="md"
              name="model"
              options={[
                {
                  value: '1',
                  label: 'checkPoint_1',
                },
                {
                  value: '2',
                  label: 'checkPoint_2',
                },
                {
                  value: '3',
                  label: 'checkPoint_3',
                },
              ]}
            />
            <ProFormText
              width="md"
              label="迭代次数"
              name="epoch"
              initialValue={5}
              rules={[
                {
                  required: true,
                  message: '请输入迭代次数',
                },
              ]}
              placeholder="迭代次数"
            />
            <ProFormRadio.Group
              options={[
                {
                  value: '1',
                  label: 'DMS',
                },
                {
                  value: '2',
                  label: 'LC',
                },
                {
                  value: '3',
                  label: 'MS',
                },
                {
                  value: '4',
                  label: 'ME',
                },
              ]}
              label="查询策略"
              name="queryMethod"
            />
          </ProForm>
        </ProCard>
        <ProCard colSpan={16}>
          <RecordContext.Provider value={record}>
            <Record />
          </RecordContext.Provider>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Form;
