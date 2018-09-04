import React from 'react';
import SubTitle from '../SubTitle';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import { works } from '../imgUrls';
import './index.css';

const workList = [
  {
    objectId: 0,
    name: '智能问答',
    href: 'http://123.207.251.193:7888/',
    intro: "由林志航、李章宇、康岩完成的基于。。。。的实现了。。。。的智能问答网站"
  },{
    objectId: 1,
    name: '智能问答',
    href: 'http://123.207.251.193:7888/',
    intro: "由林志航、李章宇、康岩完成的基于。。。。的实现了。。。。的智能问答网站"
  },{
    objectId: 2,
    name: '智能问答',
    href: 'http://123.207.251.193:7888/',
    intro: "由林志航、李章宇、康岩完成的基于。。。。的实现了。。。。的智能问答网站"
  },{
    objectId: 3,
    name: '智能问答',
    href: 'http://123.207.251.193:7888/',
    intro: "由林志航、李章宇、康岩完成的基于。。。。的实现了。。。。的智能问答网站"
  }
]

class Works extends React.Component {

  constructor() {
    super();
    this.state = {
      workList,
    }
  }

  render(){
    return (
      <section id="Works" style={{height: this.props.winHeight,minHeight: "800px"}}>
        <SubTitle subTit="What We Did" />
        <div className="works_main">
          <Row gutter={24}>
            {this.state.workList.map((item, index) => 
              <Col className='works-row' span={6} key={item.objectId}>
                <div className='works-box'>
                  <div className='works-box-header'>{item.name}</div>
                  <div className='works-box-img'>
                    <img src={works[index]} alt={item.name+"的照片"}/>
                  </div>
                  <div className='works-box-section'>{item.intro}</div>
                  <div className='works-box-footer'>
                    <Button href={item.href} icon="search">Take a Look?</Button>
                  </div>
                </div>
              </Col>
              )}
          </Row>
        </div>
      </section>
    )
  }
}

export default Works;
