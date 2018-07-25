import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const paddingTop = this.props.winHeight/2 - 40;
    return (
      <section id="bg" style={{height: this.props.winHeight}}>
        <span className='HCon' style={{paddingTop: paddingTop}}>歡迎來到我們實驗室啦 嘻嘻嘻嘻嘻嘻嘻</span>
      </section>
    )
  }
}

export default Header;