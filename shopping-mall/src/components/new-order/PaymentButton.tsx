import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Cart } from '../../types';
import Button from '../ui/Button';
import usePayment from '../../hooks/usePayment';
import useOrderFormStore from '../../hooks/useOrderFormStore';

const Container = styled.div`
  p {
    margin-block: 2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
  }
`;

type PaymentButtonProps = {
  cart: Cart;
}

export default function PaymentButton({ cart }:PaymentButtonProps) {
  const navigate = useNavigate();

  const [{ valid }, store] = useOrderFormStore();

  const { requestPayment } = usePayment(cart);

  const [error, setError] = useState('');

  const handleClick = async () => {
    setError('');

    try {
      // const { merchantId, transactionId } = await requestPayment();
      const result = await requestPayment();

      console.log(result);

      // TODO : BE로 주문 및 결제 정보 전달

      navigate('/order/complete');
    } catch (e) {
      // instanceof Error 이건 뭐지?
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        결제
      </Button>
      {
        error
        && <p>{error}</p>
      }
    </Container>
  );
}
