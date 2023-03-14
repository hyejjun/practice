import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// jest.mock('./hooks/useFetchProducts', () => () => [
//   {
//     category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
//   },
// ]);

test('App', async () => {
  render(<App />);

  await waitFor(() => {
    screen.getByText('Apple');
  });
});
