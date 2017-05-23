import React from 'react';
import { storiesOf, setAddon, getStorybook, clearDecorators } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Button')}
  </button>
))

// Knobs as dynamic variables.
stories
  .add('as dynamic variables', () => {
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



stories.addWithJSX('truc', () => {
  return (<div> hello </div>)
})