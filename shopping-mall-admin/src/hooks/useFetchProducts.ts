import { ProductSummary } from '../types';
import useFetch from './useFetch';

export default function useFetchProducts() {
  const {
    data, loading, error, mutate,
  } = useFetch<{products: ProductSummary[]}>('/products');
  // TODO : 얘는 왜 타입을 객체 형태로 보내는지?

  return {
    products: data?.products ?? [],
    loading,
    error,
    async refresh() {
      mutate();
    },
  };
}
