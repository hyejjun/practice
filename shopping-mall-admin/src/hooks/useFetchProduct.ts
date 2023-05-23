import { ProductDetail } from '../types';
import useFetch from './useFetch';

export default function useFetchProduct({ productId }: {
  productId : string
}) {
  const {
    data, loading, error, mutate,
  } = useFetch<ProductDetail>(`/products/${productId}`);

  return {
    product: data,
    loading,
    error,
    async refresh() {
      mutate();
    },
  };
}
