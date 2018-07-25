import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div style={{height: this.props.winHeight}}>
        <span>
          我也不知道聯係方式欸。。。
        </span>
      </div>
    )
  }
}

export default Contact;