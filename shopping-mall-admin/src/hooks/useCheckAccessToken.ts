import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAccessToken from './useAccessToken';
import { apiService } from '../services/ApiService';

export default function useCheckAccessToken():boolean {
  const [ready, setReady] = useState<boolean>(false);

  const { accessToken, setAccessToken } = useAccessToken();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await apiService.fetchCurrentUser();
        setReady(true);
      } catch (error) {
        setAccessToken('');
      }
    };

    fetchCurrentUser();
  }, [accessToken, setAccessToken]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return ready;
}
