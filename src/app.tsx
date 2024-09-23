// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import React from 'react';
import { RunTimeLayoutConfig } from '@@/plugin-layout/types';
import { Settings as LayoutSettings } from '@ant-design/pro-components';
import { AvatarName, Footer, RightContent } from '@/components';
import { RequestConfig } from '@umijs/max';
import queryString from 'query-string';
import defaultSettings from '../config/defaultSettings';

export async function getInitialState(): Promise<GLOBAL.InitialState> {

  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {

  return {
    avatarProps: {
      src: '',
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <RightContent>{avatarChildren}</RightContent>;
      },
    },
    waterMarkProps: {
      content: '123',
    },
    footerRender: () => <Footer />,
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态

    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  timeout: 5000,
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
};
