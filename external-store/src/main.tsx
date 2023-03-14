import 'reflect-metadata'; // 모든 코드가 시작하는 곳에 선언

import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');

  if (!element) return;

  const root = ReactDOM.createRoot(element);

  root.render((
    <App />
  ));
}

main();
