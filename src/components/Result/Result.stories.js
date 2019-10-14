import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import Result from './Result';

let module;
let stories = storiesOf('Molecules/Category/Result', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <Result>
    Hello world
  </Result>
));