import React from 'react';
import Tabs from 'antd/lib/tabs';
import Teacher from './Teacher';
import Postgraduate from './Postgraduate';
import Undergraduate from './Undergraduate';


const { TabPane } = Tabs;

class Team extends React.Component {

  render(){
    return (
      <div>
        <Tabs>
          <TabPane tab="指导老师" key="1">
            <Teacher />
          </TabPane>
          <TabPane tab="研究生" key="2">
            <Postgraduate />
          </TabPane>
          <TabPane tab="本科生" key="3">
            <Undergraduate />
          </TabPane>
        </Tabs>
      </div>
      )
  }
}

export default Team;