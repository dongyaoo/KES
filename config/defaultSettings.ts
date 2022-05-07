import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '故障领域的小样本知识抽取系统',
  pwa: false,
  logo: 'https://i.imgtg.com/2022/05/07/ztsSj.png',
  iconfontUrl: '',
};

export default Settings;
