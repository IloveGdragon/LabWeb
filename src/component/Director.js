import React from 'react';
import './Director.css';

class Director extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <section style={{height: this.props.winHeight}}>
        其实我也不知道在做什么啦
      </section>
    )
  }

}

export default Director;