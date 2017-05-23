import React from 'react';
import { storiesOf, setAddon, getStorybook, clearDecorators } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('Storybook Knobs', module)
  .addDecorator(withKnobs)
  .addWithJSX('with a button', () => (
    <button disabled={boolean('Disabled', false)}>
      {text('Label', 'Hello Button')}
    </button>
  ))
  .addWithJSX('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  })
  .addWithJSX('as dynamic variables 2', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  })
  .addWithJSX('truc', () => {
    return (<div> hello </div>)
  })