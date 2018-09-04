import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Director from './Director';
import Member from './Member';
import Works from './Works';
import Contact from './Contact';
import BackTop from 'antd/lib/back-top';
import 'antd/dist/antd.css'

class BrowserApp extends React.Component {
  constructor(){
    super();
    this.state = {
      height: window.innerHeight,
    }
  }

  render(){
    return (
      <div>
        <Nav />
        <Header winHeight = {this.state.height}/>
        <Director winHeight = {this.state.height} />
        <Member winHeight = {this.state.height} />
        <Works winHeight = {this.state.height} />
        <Contact />
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
      )
  }
}

export default BrowserApp;