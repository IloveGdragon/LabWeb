import React, {Component} from 'react';
import './Nav.css';


class Nav extends Component  {
  render(){
    return (
      <nav id='nav'>
        <span id='lav_logo'>社会媒体大数据实验室</span>
        <ul>
          <li><a id='lab_director' className="navLink">实验室方向</a></li>
          <li><a id='lab_member' className="navLink">实验室成员</a></li>
          <li><a id='lab_works' className="navLink">实验室作品</a></li>
          <li><a id='lab_contact' className="navLink">联系我们</a></li>
        </ul>
      </nav>
      )
  }
}

export default Nav;