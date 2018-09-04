import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const info = [
  {
    objetcID: 0,
    name: '吴洁',
    pic: '这是是吴洁学姐的照片',
    grade: '一年级研究生',
    direction: '吴洁学姐的研究方向吴洁学姐的研究方向吴洁学姐的研究方向吴洁学姐的研究方向',
    result: '吴洁学姐的研究成果吴洁学姐的研究成果吴洁学姐的研究成果吴洁学姐的研究成果吴洁学姐的研究成果吴洁学姐的研究成果'
  },{
    objetcID: 1,
    name: '陈建促',
    pic: '这是是陈建促学姐的照片',
    grade: '二年级研究生',
    direction: '陈建促学姐的研究方向陈建促学姐的研究方向陈建促学姐的研究方向',
    result: '陈建促学姐的研究成果陈建促学姐的研究成果陈建促学姐的研究成果陈建促学姐的研究成果陈建促学姐的研究成果'
  }
]

const BgElement = Element.BgElement;

class Postgraduate extends React.Component {

  constructor() {
    super();
    this.state = {
      info,
    }
  }

  render () {
    return (
      <div className='Member_pos'>
        <BannerAnim prefixCls="banner-user">
        {
          this.state.info.map(item=>
            <Element
            prefixCls="banner-user-elem"
            key={item.objetcID}
            >
              <BgElement
                key='bg'
                className='bg'
                style={{background: '#70cfda'}} 
              />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                <div className="postgraduate-photo">
                  <p>这是是{item.name}学姐的照片</p>
                </div>
                <p className="postgraduate-name">{item.name}</p>
                <p className='postgraduate-title'>{item.grade}</p>
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                <h2>研究方向</h2>
                <p className="postgraduate-con">{item.direction}</p>
                <h2>研究成果</h2>
                <p className="postgraduate-con">{item.result}</p>
              </TweenOne>
            </Element>
        )}
        </BannerAnim>
      </div>
    )
  }
}

export default Postgraduate;