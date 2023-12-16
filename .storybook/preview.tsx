import React from 'react';
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary } from '@storybook/blocks';

import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
        </>
      )
    }
  },
};

export default preview;
