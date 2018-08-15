import React from 'react';
import Nav from './Nav.js';
import Header from './Header.js';
import Director from './Director.js';
import Member from './Member.js';
import Works from './Works.js';
import Contact from './Contact.js';
import { BackTop } from 'antd';
import './App.css';
import 'antd/dist/antd.css'

class App extends React.Component {
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

export default App;