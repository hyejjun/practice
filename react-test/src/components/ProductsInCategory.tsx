import Product from '../types/Product';

type ProductsInCategoryProps = {
	category : string;
	products : Product[];
}

export default function ProductsInCategory({ category, products }:ProductsInCategoryProps) {
  return (
    <>
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
      {
        products.filter((product) => product.category === category).map((product) => (
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))
      }
    </>
  );
}

/*
	filter 기능을 이용하여 categories[0] = 'Fruits' 와 일치하는 요소들만 뽑아낸다.
	자바스크립트에서 filter 는 배열에 사용하며,
	주어진 함수를 만족하는 모든 요소를 모아 새 배열로 반환한다.
	filterdByCategory 자체가 배열이 됨,
	조건에 부합하는 배열만 가지고 다시 map을 돌린다.
  */
// const filterdByCategory = products.filter((product) => product.category === categories[0]);
