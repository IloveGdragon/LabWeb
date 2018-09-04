import React from 'react';
import './index.css';

const list = [
  {
    title: '关于',
    href: '#Director',
    objectID: 0,
  },
  {
    title: '我们',
    href: '#Member',
    objectID: 1,
  },
  {
    title: '作品',
    href: '#Works',
    objectID: 2,
  },
  {
    title: '联系我们',
    href: '#Contact',
    objectID: 3,
  }
];

class Nav extends React.Component  {

  constructor (props){
    super(props);
    this.state = {
      style : {},
      list,
    }
  }

  scrolling = target => document.querySelector(target).scrollIntoView({behavior: "smooth",block: 'start'});

  componentDidMount(){
    window.onscroll = ()=>{
      if(window.pageYOffset > 700){
        this.setState({
          style: {
            opacity: '0.7',
          }
        })
      } else {
        this.setState({
          style: {}
        })
      }
    }
  }

  componentWillUnmount(){
    window.onscroll='';
  }

  render(){
    return (
      <div className="nav" style={this.state.style}>
        <div>
          <span id='lav_logo' className='color'>社会媒体大数据实验室</span>
        </div>
        <div>
          <ul>
            {
              this.state.list.map(item => 
                <li key={item.objectID}><span onClick={()=>this.scrolling(item.href)}>{item.title}</span></li>
              )
            }
          </ul>
        </div>  
      </div>
      )
  }

}

export default Nav;