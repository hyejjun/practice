/* eslint-disable no-useless-return */
import { useRef } from 'react';

import { styled } from 'styled-components';

const Container = styled.div<{ label?: string }>`
  label {
    width: 5rem;
    display: ${(props) => (props.label ? 'inline-block' : 'none')};
  }
`;

type TextBoxProps = {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'tel';
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function TextBox({
  label = '',
  placeholder = undefined,
  type = 'text',
  value,
  onChange = undefined,
  readOnly = false,
}: TextBoxProps) {
  const id = useRef(`textbox-${Math.random().toString().slice(2)}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <Container label={label}>
      <label htmlFor={id.current}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readOnly}
      />
    </Container>
  );
}
