import React from 'react';
import { Tabs } from 'antd';
import Teacher from './Teacher';


const { TabPane } = Tabs;

class Team extends React.Component {

  render(){
    return (
      <div>
        <Tabs>
          <TabPane tab="指导老师" key="1">
            <Teacher />
          </TabPane>
          <TabPane tab="研究生" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="本科生" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
      )
  }
}

export default Team;