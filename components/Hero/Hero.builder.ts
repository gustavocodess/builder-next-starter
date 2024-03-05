import Hero from './Hero';
import { Builder } from '@builder.io/react';

export const HeroBuilderConfig = {
  name: 'Hero',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'The best offer on the market for your business.',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52dcecf48f9c48cc8ddd8f81fec63236',
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Get started'
    },
    {
      name: 'textColor',
      type: 'string',
      enum: ['red', 'white', 'magenta', 'black', 'green', '#ece'],
      defaultValue: 'Get started'
    },
  ],
};

Builder.registerComponent(Hero, HeroBuilderConfig);
