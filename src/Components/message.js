import React, { Component } from 'react';
import '../styles/message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

      }
  render() {
    return (
        <div className={this.props.message ? (this.props.error ? 'alert alert-danger' : 'alert alert-success') : 'no-dispaly'} role="alert">
            {this.props.message}
        </div>
    )
  }
}

export default Message;
