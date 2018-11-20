import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { PrimaryNav } from './PrimaryNav';

let stories = storiesOf('Molecules/Navigation/PrimaryNav', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
<PrimaryNav 
  listItems={[
      {
        "href": "#",
        "text": "Nav Item 1"
      },
      {
        "href": "#",
        "text": "Nav Item 2"
      },
      {
        "href": "#",
        "text": "Nav Item 3"
      },
      {
        "href": "#",
        "text": "Nav Item 4"
      }
    ]} 
  />
);