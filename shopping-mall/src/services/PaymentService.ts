// https://portone.gitbook.io/docs/auth/guide/3.

const PG_CODE = process.env.PORTONE_PG_CODE || '';

type Product = {
  name: string;
  price: number;
};

type Buyer = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
};

type PaymentResponse = {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string | null;
  merchant_uid: string;
}

export default class PaymentService {
  instance = Reflect.get(window, 'IMP');

  async requestPayment({ merchantId, product, buyer }: {
    merchantId: string;
    product: Product;
    buyer?: Buyer;
  }): Promise<{
    merchantId: string;
    transactionId: string;
  }> {
    /*
      원래는 request_pay가 callback 함수로 리턴되는데
      이거를 async await 같은 비동기 통신 처럼 만들어주려고
      new Promise를 사용함.
    */
    return new Promise((resolve, reject) => {
      this.instance.request_pay({
        pg: PG_CODE,
        pay_method: 'card',
        merchant_uid: merchantId,
        name: product.name,
        amount: product.price,
        buyer_email: buyer?.email,
        buyer_name: buyer?.name,
        buyer_tel: buyer?.phoneNumber,
        buyer_addr: buyer?.address,
        buyer_postcode: buyer?.postalCode,
      }, (response: PaymentResponse) => {
        if (response.success) {
          resolve({
            merchantId: response.merchant_uid,
            transactionId: response.imp_uid ?? '',
          });
        } else {
          reject(Error(response.error_msg));
        }
      });
    });
  }
}

export const paymentService = new PaymentService();
