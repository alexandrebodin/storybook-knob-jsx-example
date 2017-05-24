import React, { Component } from 'react';
import { storiesOf, setAddon, getStorybook, clearDecorators } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import JSXAddon from 'storybook-addon-jsx';


class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onChange(event);
    }

    render() {
        const inputProps = {
            type: 'text',
            id: this.props.id,
            className: 'form-control',
            placeholder: this.props.label,
            value: this.props.value,
            onChange: this.onChange
        };

        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input {...inputProps} />
            </div>
        );
    }
}

class WithState extends Component {
  constructor(props){
    super(props);
    this.state = this.props.state || {};
  }
  render() {

    const self = this;

    const props = Object.keys(this.props).reduce((props, key) => {
      if (key === 'children' || key === 'state') return props;
      return {
        ...props,
        [key]: this.props[key](this)
      }
    }, {});

    const children = React.cloneElement(this.props.children, props);

    return (
      <div>
        {children}
      </div>
    )
  }
}

setAddon(JSXAddon);


storiesOf('Input', module)
  .addWithJSX('InputText', () => {
    return (
      <WithState 
          onChange={(self) => event => self.setState({ name: event.target.value })} 
          value={(self) => self.state.name}
          state={{ name: 'initText' }}
      >
          <InputText label="Name" id="name"/>
      </WithState>
    );
  }, { skip: 1 })

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


