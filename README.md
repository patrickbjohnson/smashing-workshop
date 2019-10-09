# Vanilla React

Vanilla React is a barebones UI starter kit for building components and pages

## Using This Repo

To get started, type the following commands into the terminal:

- `git clone https://github.com/bradfrost/vanilla-react.git && cd vanilla-react`
- `npm install`
- `npm start` will start Storybook.

## Building components

Start building in the `src/components` folder with this folder structure:

```
- ComponentName
  - ComponentName.js
  - ComponentName.scss
  - ComponentName.stories.js
```

For instance, create `src/components/Button` and add `Button.scss`, `Button.js` and `Button.stories.js`

**Button.js** will be something along the lines of:

```js
import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <button className='Button' {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
```

**Button.stories.js** will be:

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () => (
  <Button onClick={() => console.log('clicked!!')}>Hello Button</Button>
));
```
