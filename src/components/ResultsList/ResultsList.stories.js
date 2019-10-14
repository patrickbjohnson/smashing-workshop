import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import ResultsList from './ResultsList';

let module;
let stories = storiesOf('Molecules/Category/ResultsList', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <ResultsList>
    Hello world
  </ResultsList>
));