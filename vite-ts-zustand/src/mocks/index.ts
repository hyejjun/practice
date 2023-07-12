import { server } from './server';

if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  server.listen();
}
