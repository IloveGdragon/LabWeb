import React from 'react';
import './Member.css';

class Member extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <section style={{height: this.props.winHeight}}>
        <h2>老师：</h2>
        <span>朱老师</span>
        <h2>学生：</h2>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
        <span>林志航</span>
      </section>
    )
  }
}

export default Member;