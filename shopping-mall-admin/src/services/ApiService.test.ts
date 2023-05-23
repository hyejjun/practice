import ApiService from './ApiService';

import fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('setAccessToken', async () => {
    apiService.setAccessToken('ACCESS-TOKEN');
    apiService.setAccessToken('');
    apiService.setAccessToken('ACCESS-TOKEN');
  });

  test('login', async () => {
    const accessToken = await apiService.login({
      email: 'tester@example.com',
      password: 'password',
    });
    expect(accessToken).toBeTruthy();
  });
});
