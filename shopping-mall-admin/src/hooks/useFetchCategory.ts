import { apiService } from '../services/ApiService';
import { Category } from '../types';
import useFetch from './useFetch';

export default function useFetchCategory({ categoryId }:{
  categoryId:string
}) {
  const url = `/categories/${categoryId}`;

  const {
    data, error, loading, mutate,
  } = useFetch<Category>(url);

  return {
    category: data,
    error,
    loading,
    async updateCategory({ name, hidden }: {
      name: string;
      hidden: boolean;
    }) {
      await apiService.updateCategory({ categoryId, name, hidden });
      mutate();
    },
  };
}
