import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { apiService } from '../services/ApiService';

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
}
