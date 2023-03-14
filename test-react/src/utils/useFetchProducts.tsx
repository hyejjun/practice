import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import Products from '../types/Products';

export default function useFetchProducts() {
  const [products, setProducts] = useState<Products[]>([]);

  const BASE_URL = 'http://localhost:3500';

  useEffectOnce(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  });
  return products;
}
