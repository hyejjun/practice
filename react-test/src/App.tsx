// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import FilterableProductTable from './components/FilterableProductTable';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
  const products = useFetchProducts();
  return (
    <FilterableProductTable products={products} />
  );
}
