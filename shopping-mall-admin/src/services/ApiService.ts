import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-04.fly.dev/admin';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

  fetcher() {
    return async (url: string) => {
      const { data } = await this.instance.get(url);
      return data;
    };
  }

  // 로그인 토큰 체크
  async fetchCurrentUser(): Promise<{
    id: string;
    name: string;
  }> {
    const { data } = await this.instance.get('/users/me');

    const { id, name } = data;
    return { id, name };
  }

  // login
  async login({ email, password }: {
    email: string;
    password: string;
  }): Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }

  // logout
  async logout(): Promise<void> {
    await this.instance.delete('/session');
  }

  // 카테고리 생성
  async createCategory({ name }: {
      name: string
  }): Promise<void> {
    await this.instance.post('/categories', { name });
  }

  // 카테고리 수정
  async updateCategory({ categoryId, name, hidden }: {
    categoryId: string;
    name: string;
    hidden: boolean;
  }): Promise<void> {
    await this.instance.patch(`/categories/${categoryId}`, { name, hidden });
  }

  // 상품 생성
  async createProduct({
    categoryId,
    images,
    name,
    price,
    options,
    description,
  }: {
    categoryId: string,
    images: {
      url: string;
    }[],
    name: string,
    price: number,
    options: {
      name: string;
    }[],
    description: string,
  }): Promise<void> {
    await this.instance.post('/products', {
      categoryId,
      images,
      name,
      price,
      options,
      description,
    });
  }

  // 상품 수정
  async updateProduct({
    productId,
    categoryId,
    images,
    name,
    price,
    options,
    description,
  }: {
    productId: string;
    categoryId: string,
    images: {
      url: string;
    }[],
    name: string,
    price: number,
    options: {
      name: string;
    }[],
    description: string,
  }): Promise<void> {
    await this.instance.patch(`/products/${productId}`, {
      categoryId,
      images,
      name,
      price,
      options,
      description,
    });
  }

  // 주문 수정
  async updateOrder({ orderId, status }:{
    orderId: string;
    status: string;
  }) {
    await this.instance.patch(`orders/${orderId}`, {
      status,
    });
  }
}

export const apiService = new ApiService();
