import '../styles/variables.css';
import '../styles/global.less';
import '../styles/theme.less';
import '../stories/preview.scss';
import { themes } from '@storybook/theming';
import { DocsContainer } from './storybook-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    container: DocsContainer,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    viewMode: 'docs',
  },
  darkMode: {
    current: 'dark',
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: '#171523',
      brandImage: 'https://owncast.online/images/logo.svg',
      brandTitle: 'Owncast',
      brandUrl: 'https://owncast.online',
      appContentBg: '#171523',
    },
    // Override the default light theme
    light: { ...themes.normal },
  },
};