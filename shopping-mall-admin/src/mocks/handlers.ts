// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = 'https://shop-demo-api-03.fly.dev';

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(ctx.json({ categories: fixtures.categories }))
  )),

];

export default handlers;
