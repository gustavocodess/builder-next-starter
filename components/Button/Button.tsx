import React from 'react';
import { Button as ButtonUI } from 'evergreen-ui';

// import { Container } from './styles';
interface Props {
  text: string;
}

const Button = ({text}: Props) => {
  return <ButtonUI appearance="primary">
    {text}
  </ButtonUI>;
}

export default Button;