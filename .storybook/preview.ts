import type { Preview } from '@storybook/react-vite'
import 'tendaui-react/es/style/index.css'; // 引入组件库的样式
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