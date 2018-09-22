import React from 'react';
import sha1 from 'sha1';
import { navigateTo } from "gatsby-link";
import {get} from 'axios';

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
    const requestUrl = `/annalisa.space/${hash}${this.props.url}`;
    console.log(requestUrl);
    event.preventDefault();


    // instead let's try updating the requestUrl in state and generating a link
    // element for it and see if I create a link with the correct href if gatsby
    // link works
    console.log('updat 1');
          // navigateTo(requestUrl);
    get(requestUrl)
      .then(r => {
        console.log(r.data);
        const is404 = !~r.data.indexOf('NOT FOUND')
        console.log(is404);
        if(is404) {
          console.log('password is invalid');
        } else {
          navigateTo(requestUrl);
          return;
        }
      }).catch(err => console.log('password is invalid'));
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
