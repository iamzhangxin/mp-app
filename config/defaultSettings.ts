import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#E32519',
  layout: 'top',
  contentWidth: 'Fluid',
  title: 'my-app',
  pwa: true,
  logo: '',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    header: {
      colorTextMenu: '#595959',
      colorTextMenuSelected: '#E32519',
      colorBgMenuItemSelected: '#ffe1e0',
      heightLayoutHeader: 64
    },
  },
};

export default Settings;