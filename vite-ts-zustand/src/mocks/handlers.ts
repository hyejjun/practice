import { rest } from 'msw';

const BASE_URL = 'https://example.com';

let newId = 10;

const posts = [
  { id: 1, title: '1st post', body: 'Hello!' },
];

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      ctx.status(200),
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.get(`${BASE_URL}/posts`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      posts,
    }),
  )),

  rest.post(`${BASE_URL}/posts`, (req, res, ctx) => {
    newId += 1;

    const post = {
      id: newId,
      title: `Post-${newId}`,
      body: 'Hello...',
    };

    posts.push(post);

    return res(
      ctx.status(200),
      ctx.json({
        post,
      }),
    );
  }),

];
