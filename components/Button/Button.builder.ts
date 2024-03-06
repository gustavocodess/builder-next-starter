import { Builder } from "@builder.io/react";
import Button from './Button'

export const ButtonBuilderConfig = {
  name: 'Button',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Click',
    },
  ],
};

Builder.registerComponent(Button, ButtonBuilderConfig);
