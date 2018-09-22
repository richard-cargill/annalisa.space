import React from 'react';
import sha1 from 'sha1';

export default class Password extends React.Component {
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
    const hash = sha1(this.state.value);
    const newLocation = `${hash}${this.props.url}`;
    event.preventDefault();
    fetch(hash)
      .then(r => {
        window.location = newLocation;
      })
      .catch(e => {
        console.log('password incorrect');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
