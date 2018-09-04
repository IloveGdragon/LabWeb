import React from 'react';
import BrowserApp from './BrowserApp';
import MobileApp from './MobileApp';
import MediaQuery from 'react-responsive';
import './App.css';

class App extends React.Component {

  render(){

    return (
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
         <BrowserApp />
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <MobileApp />
        </MediaQuery>
      </div>
      )
  }
}

export default App;