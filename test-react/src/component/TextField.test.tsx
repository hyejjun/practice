import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  // given
  const label = 'Name';
  const text = 'Tester';

  const setText = jest.fn();

  beforeEach(() => {
    // setText.mockClear();
    jest.clearAllMocks();
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder="please input"
        text={text}
        setText={setText}
      />,
    );
  }

  it('renders element', () => {
    // when
    renderTextField();
    // then
    const input = screen.getByLabelText(label);
    // expect(input.value).toBe(text);

    screen.getByDisplayValue(text);
    screen.getByPlaceholderText(/input/);
  });

  context('when user enters name', () => {
    it('calls setText func', () => {
      // given
      renderTextField();

      // value 에 어떤 값을 넣고 이 값이 넣어질때 setText가 작동되므로 이게 불렸나를 테스트 할 수 있음
			 fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalled();
      expect(setText).toBeCalledWith('New Name');
      // expect(setText).toBeCalledWith(1);
    });
  });
});
