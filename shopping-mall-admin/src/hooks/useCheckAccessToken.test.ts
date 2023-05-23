import { renderHook, waitFor } from '@testing-library/react';

import useCheckAccessToken from './useCheckAccessToken';

const setAccessToken = jest.fn();
const fetchCurrentUser = jest.fn();

jest.mock('./useAccessToken', () => () => ({
  accessToken: '',
  setAccessToken,
}));

jest.mock('../services/ApiService', () => ({
  get apiService() {
    return {
      fetchCurrentUser,
    };
  },
}));

// 토큰 유효성 검사

const context = describe;
describe('useCheckAccessToken', () => {
  beforeEach(() => {
    const user = 'USER';
    fetchCurrentUser.mockResolvedValue(user);
  });

  // 성공하면 아무일도 안일어남.
  it('dose not call "setAccess"', () => {
    renderHook(() => useCheckAccessToken());

    expect(setAccessToken).not.toBeCalled();
  });
});

it('dose not call "setAccess"', () => {
  renderHook(() => useCheckAccessToken());

  expect(setAccessToken).not.toBeCalled();
});

// 실패하면 AccessToken 을 빈 값으로 바꿔줌
context('when fetching is failed', () => {
  beforeEach(() => {
    fetchCurrentUser.mockRejectedValue(new Error('Bad Request'));
  });

  it('calls "setAccess" with empty string', async () => {
    renderHook(() => useCheckAccessToken());

    await waitFor(() => {
      expect(setAccessToken).toBeCalledWith('');
    });
  });
});
