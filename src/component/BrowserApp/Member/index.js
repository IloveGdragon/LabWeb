import React from 'react';
import SubTitle from '../SubTitle';
import Team from './Team';
import './index.css';

class Member extends React.Component {

  render(){
    return (
      <section id="Member" style={{minHeight: "800px", background: '#f9f9f9'}}>
        <SubTitle subTit="Who We Are" />
        <Team />
      </section>
      )
  }
}

export default Member;
