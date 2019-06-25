import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form__label">
            Hi! What's your name? 
            <input type="text" className="form__input-name" placeholder="enter name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" className="form__input-submit" value="go" />
        </form>
      );
    }
  }

  ReactDOM.render(
      < NameForm />, document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
