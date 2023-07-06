import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))`
  color : black;
`;

export default Button;
