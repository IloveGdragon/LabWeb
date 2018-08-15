import React from 'react';
import './Header.css';

class Header extends React.Component {
  
  render(){
    const paddingTop = (this.props.winHeight / 2 - 40) > 400 ? this.props.winHeight / 2 - 40 : 400;
    return (
      <section id="bg" style={{height: this.props.winHeight,minHeight: "800px"}}>
        <span className='HCon' style={{paddingTop: paddingTop}}>还没想好封面要怎么做啦</span>
      </section>
    )
  }
}

export default Header;