import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

class SubTitle extends React.Component {

  render(){
    return (
      <div className="dir_tit">
        <h2><span>{this.props.subTit}</span></h2>
      </div>
    )
  }
}

SubTitle.propTypes = {
  subTit: PropTypes.string.isRequired
}

export default SubTitle;