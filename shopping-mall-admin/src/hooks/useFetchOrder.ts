import useFetch from './useFetch';

import { OrderDetail } from '../types';
import { apiService } from '../services/ApiService';

export default function useFetchOrder({ orderId }: {
  orderId: string
}) {
  const {
    data, loading, error, mutate,
  } = useFetch<OrderDetail>(`/orders/${orderId}`);

  return {
    order: data,
    loading,
    error,
    async updateOrder({ status }:{
      status:string
    }) {
      await apiService.updateOrder({ orderId, status });
      mutate();
    },
  };
}
