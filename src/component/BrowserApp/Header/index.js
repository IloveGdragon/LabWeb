import React from 'react';
import './index.css';
import {background} from '../imgUrls';

class Header extends React.Component {
  
  render(){
    const paddingTop = (this.props.winHeight / 2 - 40) > 400 ? this.props.winHeight / 2 - 40 : 400;
    return (
      <section id="bg" style={{background: `url(${background}) #0b333f no-repeat center center fixed`,  height: this.props.winHeight,minHeight: "800px"}}>
        <span className='HCon' style={{paddingTop: paddingTop}}>如你所见</span>
      </section>
    )
  }
}

export default Header;