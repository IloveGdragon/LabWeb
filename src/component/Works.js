import React from 'react';
import './Works.css';

class Works extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <section style={{height: this.props.winHeight}}>
        <span>
          作品其實有很多啦！
        </span>
      </section>
    )
  }
}

export default Works;