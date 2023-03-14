import { useEffect, useState } from 'react';

import Product from '../types/Product';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3500/products';
      const response = await fetch(url);

      const data = await response.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, []);
  return products;
};

export default useFetchProducts;
