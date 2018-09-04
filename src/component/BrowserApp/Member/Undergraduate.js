import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

const und_info = [
  {
    name: "王际畅",
    interest: 'web',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 0,
  },{
    name: "林志航",
    interest: '----',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 1,
  },{
    name: "李章宇",
    interest: '----',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 2,
  },{
    name: "朱文轩",
    interest: '---',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 3,
  },{
    name: "康岩",
    interest: '---',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 4,
  },{
    name: "黄兰卿",
    interest: '---',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 5,
  },{
    name: "姜鹏",
    interest: '---',
    grade: '大三',
    color: '#d9d0f5',
    works: '--------------------',
    objectId: 6,
  },
]

class Undergraduate extends React.Component {

  constructor() {
    super();
    this.state = {
      und_info,
    }
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      slidePerView: 1, 
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }

  render() {
    return (
      <div className='und_con'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
          {
            this.state.und_info.map(item => 
              <div key={item.objectId} className='swiper-slide'>
                <div className={'und_main color'+ item.objectId}>
                  <div className="und-photo">这是{item.name}的照片</div>
                  <div className="und_per_info">
                    <p className="postgraduate-name">{item.name}</p>
                    <p className="postgraduate-title">{item.grade}</p>
                  </div>
                  <div>
                    <h2>方向</h2>
                    <p>{item.interest}</p>
                    <h2>作品</h2>
                    <p>{item.works}</p>
                  </div>
                </div>
              </div>
            )
          }
          </div>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
        </div>
      </div>
    )
  }
}

export default Undergraduate;