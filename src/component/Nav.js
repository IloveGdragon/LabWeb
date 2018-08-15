import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component  {

  constructor (props){
    super(props);
    this.state = {
      style : {

      }
    }
  }

  componentDidMount(){
   window.onscroll = ()=>{
    if(window.pageYOffset > 700){
      this.setState({
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'black',
          fontSize: '27px',
          height: '75px',
          lineHeight: '75px',
          opacity: '0.7',
        }
      })
    } else {
      this.setState({
        style: {
        }
      })
    }
  }
}

render(){
  return (
    <div className="nav" style={this.state.style}>
      <span id='lav_logo' className='color'>社会媒体大数据实验室</span>
      <ul>
        <li><a href='#Director' title='我们在做什么'>我们在做什么</a></li>
        <li><a href='#Member' title='我们是谁'>我们是谁</a></li>
        <li><a href='#Works' title='我们做了什么'>我们做了什么</a></li>
        <li><a href='#Contact' title='联系我们'>联系我们</a></li>
      </ul>
    </div>
    )
}
}

export default Nav;