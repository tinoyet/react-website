import { lazy } from 'react';

// 快速导入工具函数
const lazyLoad = (moduleName: string) => lazy(() => import(`@/pages/${moduleName}/index.tsx`));
import RequireAuth from '@/router/Guard';
export const Home = lazyLoad('Home');
export const ErrorPage = lazyLoad('ErrorPage');

const routers: any[] = [
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  {
    path: '*',
    element: <ErrorPage />,
    meta: {
      title: '',
    },
  },
];

export default routers;
