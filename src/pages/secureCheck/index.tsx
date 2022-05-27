import { message } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-form';
import { FC, useState } from 'react';
import { createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export const TokenContext = createContext<any>([]);
const Form: FC<Record<string, any>> = () => {
  const [spdl, setSpdl] = useState<string>();
  const [checkRes, setCheckRes] = useState<string>()

  const options = [{ label: 'OBU1', value: 'OBU1' }, { label: 'OBU2', value: 'OBU2' }, { label: 'SN', value: 'SN' }]

  const onFinish = async (values: Record<string, any>) => {
    const timer = setTimeout(() => {
      setSpdl('test')
      message.success(`SPDL已生成`);
      clearTimeout(timer)
    }, 2000)
  };

  const onFinish2 = async (values: Record<string, any>) => {
    const timer = setTimeout(() => {
      setCheckRes('res')
      clearTimeout(timer)
    }, 2000)
  };

  return (
    <PageContainer content="安全验证">
      <ProCard gutter={8} style={{ height: 650 }}>
        <ProCard colSpan={8}>
          <ProForm
            hideRequiredMark
            style={{ margin: 'auto', marginTop: 8, marginBottom: 20, maxWidth: 600 }}
            name="basic"
            layout="vertical"
            initialValues={{ public: '1' }}
            onFinish={onFinish}
            submitter={{
              // 配置按钮文本
              searchConfig: {
                submitText: '确定',
              },
              
            }}
          >
            <ProFormSelect name='dest' label='目标协议端' options={options} placeholder='选择目标协议端'></ProFormSelect>
            <ProFormText name='checkPath' label='验证路径' initialValue=''></ProFormText>
          </ProForm>
          
        </ProCard>
        <ProCard colSpan={16}>
          <ProForm
            hideRequiredMark
            style={{ margin: 'auto', marginTop: 8, marginBottom: 20, maxWidth: 600 }}
            name="basic2"
            layout="vertical"
            initialValues={{ public: '1' }}
            onFinish={onFinish2}
            submitter={{
              // 配置按钮文本
              searchConfig: {
                submitText: '安全验证',
              },
              // 配置按钮的属性
              resetButtonProps: {
                style: {
                  // 隐藏重置按钮
                  display: 'none',
                },
              },
              submitButtonProps: {},
            }}
          >
          <ProFormTextArea name='SPDL' label='SPDL生成' fieldProps={{value: spdl}}></ProFormTextArea>
          <ProFormTextArea name='checkRes' label='验证结果' fieldProps={{allowClear: false, value: checkRes}}></ProFormTextArea>
          </ProForm>
          
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Form;
