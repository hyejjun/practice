import ProductsInCategory from './ProductsInCategory';

import Product from '../types/Product';

type ProductTableProps = {
	products : Product[],
}
export default function ProductTable({ products }:ProductTableProps) {
	 /* reduce 기능을 이용하여 중복되지 않게 카테고리만 분리했다. */
	 const categories = products.reduce(
    (acc: string[], product: Product) => (acc.includes(product.category)
      ? acc
      : [...acc, product.category]),
    [],
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category) => (
            <ProductsInCategory
              key={category}
              category={category}
              products={products}
            />
          ))
        }

      </tbody>
    </table>
  );
}
