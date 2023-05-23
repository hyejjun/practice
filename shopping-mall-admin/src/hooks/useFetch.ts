import useSWR from 'swr';

import { apiService } from '../services/ApiService';

const API_BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-04.fly.dev/admin';

export default function useFetch<Data>(path: string) {
  const url = `${API_BASE_URL}${path}`;

  const {
    data, error, isLoading, mutate,
  } = useSWR<Data>(url, apiService.fetcher());

  // TODO :: 여기서 fetcher를 왜 사용 하는지...? - 아마도 axios 사용을 위해서

  return {
    data,
    error,
    loading: isLoading,
    mutate,
  };
}
