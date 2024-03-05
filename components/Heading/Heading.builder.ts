import Heading from './Heading';
import { Builder } from '@builder.io/react';

export const HeadingBuilderConfig = {
  name: 'Heading',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'This is your heading',
    },
  ],
};

Builder.registerComponent(Heading, HeadingBuilderConfig);
