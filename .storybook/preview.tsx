import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile1: {
          name: 'iPhone SE',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        mobile2: {
          name: 'iPhone 12',
          styles: {
            width: '390px',
            height: '844px',
          },
        },
        mobile3: {
          name: 'iPhone 12 Pro Max',
          styles: {
            width: '428px',
            height: '926px',
          },
        },
      },
      defaultViewport: 'mobile1',
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f3f4f6',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default preview; 