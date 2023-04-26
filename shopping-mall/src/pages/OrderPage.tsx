import useFetchCart from '../hooks/useFetchCart';

import OrderForm from '../components/new-order/OrderForm';

export default function OrderPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <OrderForm cart={cart} />
  );
}
