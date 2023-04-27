import LoginPage from './page/LoginPage';
import Layout from './components/Layout';
import HomePage from './page/HomePage';

const routes = [
  { path: '/login', element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      // { path: '/users', element: <UserListPage /> },
      // { path: '/categories', element: <CategoryListPage /> },
      // { path: '/categories/new', element: <CategoryNewPage /> },
      // { path: '/categories/:id/edit', element: <CategoryEditPage /> },
      // { path: '/products', element: <ProductListPage /> },
      // { path: '/products/new', element: <ProductNewPage /> },
      // { path: '/products/:id', element: <ProductDetailPage /> },
      // { path: '/products/:id/edit', element: <ProductEditPage /> },
      // { path: '/orders', element: <OrderListPage /> },
      // { path: '/orders/:id', element: <OrderDetailPage /> },
      // { path: '/orders/:id/edit', element: <OrderEditPage /> },
    ],
  },
];

export default routes;
