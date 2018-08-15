import React from 'react';
import './Contact.css';
import SubTitle from './SubTitle';
import { Row, Col, Icon } from 'antd';

class Contact extends React.Component {

  render(){
    return (
      <div id="Contact" style={{background: '#f9f9f9'}}>
        <SubTitle subTit="Contact Us"/>
        <div className="Contact_main" style={{width: "70%", margin: "0 15%"}}>
          <Row gutter={24}>
            <Col span={8}>
              <div className='Contact_Con'>
                <Icon style={{fontSize: 50, color: "#a1a1a1"}} type="phone" />
                <div className="Contact_Sub_Con">
                  <p>电话：这是一个十一位电话</p>
                  <p>周一 - 周五（9am-5pm）</p>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className='Contact_Con'>
                <Icon style={{fontSize: 50, color: "#a1a1a1"}} type="mail" />
                <div className="Contact_Sub_Con">
                  <p>Email：这是一个邮箱地址</p>
                  <p>Web：这是一个网页地址</p>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className='Contact_Con'>
                <Icon style={{fontSize: 50, color: "#a1a1a1",}} type="environment-o" />
                <div className="Contact_Sub_Con">
                  <p>地址：重庆理工大学花溪校区第一实验楼</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Contact;