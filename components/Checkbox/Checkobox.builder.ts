import Checkbox from './Checkbox';
import { Builder } from '@builder.io/react';

export const CheckboxBuilderConfig = {
  name: 'Checkbox',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'This sample',
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: true,
    },
  ],
};

Builder.registerComponent(Checkbox, CheckboxBuilderConfig);
