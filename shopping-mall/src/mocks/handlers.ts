// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { ProductSummary } from '../types';

import fixtures from '../../fixtures';

const BASE_URL = 'https://shop-demo-api-02.fly.dev';

const productSummaries: ProductSummary[] = fixtures.products
  .map((product) => ({
    id: product.id,
    category: product.category,
    thumbnail: product.images[0],
    name: product.name,
    price: product.price,
  }));

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(ctx.json({ categories: fixtures.categories }))
  )),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => (
    res(ctx.json({ products: productSummaries }))
  )),
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const product = fixtures.products.find((i) => i.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.json(product));
  }),
  rest.get(`${BASE_URL}/cart`, (req, res, ctx) => (
    res(ctx.json(fixtures.cart))
  )),

  rest.post(`${BASE_URL}/cart/line-items`, (req, res, ctx) => (
    res(ctx.status(201))
  )),

  rest.post(`${BASE_URL}/users`, (req, res, ctx) => (
    res(ctx.json({ accessToken: 'ACCESS-TOKEN' }))
  )),

  rest.post(`${BASE_URL}/session`, (req, res, ctx) => (
    res(ctx.json({ accessToken: 'ACCESS-TOKEN' }))
  )),

  rest.delete(`${BASE_URL}/session`, (req, res, ctx) => (
    res(ctx.status(201))
  )),

  rest.get(`${BASE_URL}/users/me`, (req, res, ctx) => (
    res(ctx.json({ id: '0BV000USR0001', name: 'tester' }))
  )),
];

export default handlers;
