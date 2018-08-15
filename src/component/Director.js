import React from 'react';
import SubTitle from './SubTitle';
import './Director.css';
import ExpansionPanel from './ExpansionPanel';

class Director extends React.Component {

  render(){
    return (
      <section id="Director" style={{minHeight: "800px"}}>
        <SubTitle subTit="What Are We Doing"/>
        <ExpansionPanel />
      </section>
      )
  }

}

export default Director;
