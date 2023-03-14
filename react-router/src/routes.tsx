import Layout from './components/Layout';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },

];

export default routes;

/*
routes를 파일로 따로 빼는 이유?
테스트에서도 이 정보를 사용하기 때문에 빼주는것이 좋다.

*/
