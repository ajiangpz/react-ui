import type { Preview } from '@storybook/react-vite'
import "../src/styles/globals.css";
import "../src/styles/rillple.css";
import "../src/styles/variables.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;