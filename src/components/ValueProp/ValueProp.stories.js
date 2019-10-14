import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import ValueProp from './ValueProp';

let module;
let stories = storiesOf('Molecules/Category/ValueProp', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <ValueProp>
    Hello world
  </ValueProp>
));