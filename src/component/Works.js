import React from 'react';
import './Works.css';
import SubTitle from './SubTitle';


class Works extends React.Component {

  render(){
    return (
      <section id="Works" style={{height: this.props.winHeight,minHeight: "800px"}}>
        <SubTitle subTit="What We Did" />
      </section>
    )
  }
}

export default Works;