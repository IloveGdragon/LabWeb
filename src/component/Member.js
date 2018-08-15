import React from 'react';
import SubTitle from './SubTitle';
import Team from './Team';
import './Member.css';

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

// <h2>老师：</h2>
//         <div>朱老师</div>
//         <h2>研究生：</h2>
//         <div>陈建促</div>
//         <div>吴洁</div>
//         <h2>本科生：</h2>
//         <div>林志航</div>
//         <div>三三</div>
//         <div>王际畅</div>
//         <div>李章宇</div>
//         <div>朱文轩</div>
//         <div>康岩</div>
//         <div>姜鹏</div>