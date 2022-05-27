import { Card, message } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormText
} from '@ant-design/pro-form';
import { FC, useState } from 'react';
import { createContext } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import TokenTable from './table';
import Meta from 'antd/lib/card/Meta';

export const TokenContext = createContext<any>([]);
const Form: FC<Record<string, any>> = () => {
  const [tokenList, setTokenList] = useState<object[]>();
  const [flag, setFlag] = useState(false)
  const [img, setImg] = useState()
  const [desc, setDesc] = useState()
  const data = [
    { token: 'S1_o1', con: '{Success，C}' },
    { token: 'O1_o1', con: '{(R)KS，MAC1}' },
    { token: 'S2_o1', con: '{PID，MAC2}' },
    { token: 'O2_o1', con: '{Update，PID1}' },
    { token: 'S3_o1', con: '{C1，C2，R1’，HLP1，H1}' },
    { token: 'O3_o1', con: '{R2’，H2}' },
    { token: 'S4_o1', con: '{PID2，H3}' },
    { token: 'O4_o1', con: '{PID1，PID2，Q1，MAC3}' },
    { token: 'S5_o1', con: '{PID1，C1，C2，R2’，HLP1，HLP2，Q1，HS1}' },
    { token: 'O5_o1', con: '{C1，HLP1，R1_c，Q2，HS2}' },
    { token: 'O6_o1', con: '{H4}' },
    { token: 'S1_o2', con: '{Success，C}' },]

  const options = [{label: 'OBU1', value: 'OBU1'},{label: 'OBU2', value: 'OBU2'},{label: 'SN', value: 'SN'}]
  const dest2img = (dest:string)=>{
    let mapper = {
      OBU1:{
        img: <img src="OBU1.png" />,
        desc: `重置次数：116      交互次数：4917`
      },
      OBU2:{
        img: <img src="OBU2.png" />,
        desc: `重置次数：116      交互次数：4917`
      },
      SN:{
        img: <img src="SN.png" />,
        desc: `重置次数：31       交互次数：2391`
      },
    }
    return mapper[dest]
  }
  const onFinish = async (values: Record<string, any>) => {
    const port = values.port
    message.success(`端口 ${port} 开始学习`);
    const timer = setTimeout(()=>{
      setTokenList(
        data.map((item: any, index: number) => {
          return {
            key: `${item['token'] + index}`,
            absToken: item['token'],
            content: item['con'],
          };
        }),
      );
      message.success(`端口 ${port} 学习完毕`);
      setFlag(true)
      clearTimeout(timer)
    },2000)
  };

  const onFinish2 = async (values: Record<string, any>) => {
    const dest = values.dest
    const timer = setTimeout(()=>{
      let obj = dest2img(dest)
      setImg(obj?.img)
      setDesc(obj?.desc)
      clearTimeout(timer)
    },2000)
  };

  return (
    <PageContainer content="模型学习">
      <ProCard gutter={8} style={{ height: 650 }}>
        <ProCard colSpan={8}>
          <ProForm
            hideRequiredMark
            style={{ margin: 'auto', marginTop: 8, marginBottom: 20, maxWidth: 600 }}
            name="basic"
            layout="inline"
            initialValues={{ public: '1' }}
            onFinish={onFinish}
            submitter={{
              // 配置按钮文本
              searchConfig: {
                submitText: '开始学习',
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
            <ProFormText name='port' label='程序交互端口' initialValue='10148'></ProFormText>
          </ProForm>
          <TokenContext.Provider value={tokenList}>
            <TokenTable />
          </TokenContext.Provider>
        </ProCard>
        <ProCard colSpan={16}>
          <ProForm
            hideRequiredMark
            style={{ margin: 'auto', marginTop: 8, marginBottom: 20,maxWidth: 600 }}
            name="basic2"
            layout="inline"
            initialValues={{ public: '1' }}
            onFinish={onFinish2}
            submitter={{
              // 配置按钮文本
              searchConfig: {
                submitText: '查看结果',
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
            <ProFormSelect name='dest' label='目标协议端' options={options} placeholder='选择目标协议端' disabled={!flag}></ProFormSelect>
          </ProForm>
          <Card hoverable style={{}} cover={img}>
            <Meta title={desc} style={{paddingLeft:200}}></Meta>
          </Card>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Form;
