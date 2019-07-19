 /**
 *  <index.js>
 *
 *  Copyright information
 *
 *      Copyright (C) 2019 Jussi Koivumäki <firstname.lastname@outlook.com>
 *
 * @author Jussi Koivumäki
 * 
 */

import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingStyle: {
        color: '#fff'
      },
    };
  }

  render() {
    return (
      <div className="App">
        <p style={this.state.headingStyle}>Gallery</p> 
      </div>   
    );
  }
}

export default Gallery;
