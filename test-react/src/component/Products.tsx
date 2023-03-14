import useFetchProducts from '../utils/useFetchProducts';

export default function Products() {
  const products = useFetchProducts();

  return (
    <div>
      <ul>
        {
          products?.map((product) => (
            <li key={product.name}>
              {/* <div>{product.category}</div> */}
              <div>{product.name}</div>
              <div>{product.price}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
