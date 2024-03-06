import React from 'react';
import { Checkbox as CheckboxUI } from 'evergreen-ui';

// import { Container } from './styles';
interface Props  {
  text: string;
  checked: boolean;
}

const Checkbox = ({text, checked}: Props) => {
  return (
    <CheckboxUI checked={checked} label={text} />
  );
}

export default Checkbox;