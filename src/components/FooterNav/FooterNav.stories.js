import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { FooterNav } from './FooterNav';

let stories = storiesOf('Molecules/Navigation/FooterNav', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div style={{ backgroundColor: '#333333' }}>
    <FooterNav />
  </div>
));
