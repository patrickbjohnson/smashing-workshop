import { addParameters, configure, addDecorator } from '@storybook/react';
import unitedTheme from './unitedTheme';
import '../src/css/style.scss';

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: unitedTheme
  }
});

configure(loadStories, module);
