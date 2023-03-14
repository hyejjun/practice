import { render, screen, fireEvent } from '@testing-library/react';
import { container } from 'tsyringe';

import App from './App';

const context = describe;

test('App', () => {
  render(<App />);
});

describe('App test', () => {
  beforeEach(() => {
    // 테스트는 독립적이여야 하므로 Store에 있는 값들이 매번 초기화 되게 해준다.
    container.clearInstances();
  });

  context('when press increase button once', () => {
    test('counter', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('count:1')).toHaveLength(3);
    });
  });

  context('when press increase button twice', () => {
    test('counter', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('count:2')).toHaveLength(3);
    });
  });
});
