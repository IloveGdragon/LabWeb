import React from 'react';
import Icon from 'antd/lib/icon';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import { zhulaoshi } from '../imgUrls';


class Teacher extends React.Component {

  render(){
    return (
      <div className='Teacher_main'>
        <Row type='flex' align="middle">
          <Col span={9}>
            <div className="Teacher_left">
              <div className="Person_img">
                <img src={zhulaoshi} alt="朱老師" />
              </div>
              <div>
                <p className="Member_name">朱小飞</p>
                <div className="honor">
                  <p className="Teacher_title">重庆市特聘专家</p>
                  <p className="Teacher_title">重庆市云计算和大数据产业协会理事</p>
                  <p className="Teacher_title">重庆市“百名海外高层次人才集聚计划”专家</p>
                  <p className="Teacher_title">重庆市大数据产业技术创新联盟专委会副主任</p>
                  <p className="Teacher_title">重庆市计算机视觉智能技术工程研究中心副主任</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={14} push={1}>
            <div className="Teacher_right">
              <div>
                <h2>职务</h2>
                <p className="Teacher_con">教授、博士、硕导</p>
                <h2>研究方向</h2>
                <p className="Teacher_con">互联网大数据搜索与挖掘</p>
              </div>
              <div className="interest">  
                <h2>研究兴趣</h2>
                <p className="Teacher_con">主要从事互联网大数据搜索与推荐、Web挖掘、机器学习、自然语言处理等方向的基础理论、关键技术的研发工作。</p>
              </div>
              <div className="result">
                <h2>研究成果</h2>
                <p>&emsp;<Icon type="double-right" /> 近年来，在本研究领域顶级国际会议和刊物(CCF A类）等，包括SIGIR、WWW、CIKM、TKDE等发表一系列国内外具有影响力的论文。</p>
                <p>&emsp;<Icon type="double-right" /> 先后担任两项欧盟第七科技框架计划国际合作项目核心课题负责人，分别带领团队开展大规模数字内容的信息价值评估研究方向，以及互联网社会多媒体领域大数据分析与挖掘方向的相关技术研发工作。</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Teacher;