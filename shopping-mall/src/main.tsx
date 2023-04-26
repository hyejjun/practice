import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

function main() {
  // [최초 1회만] 주문 페이지에서 가맹점 식별코드를 이용하여 IMP 객체를 초기화 합니다.
  Reflect.get(window, 'IMP').init(process.env.PORTONE_IMP);

  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  ));
}

main();
