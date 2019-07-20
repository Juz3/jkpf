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
import img1 from '../res/images/img1_small.jpg'

import img3 from '../res/images/gallery-asetelma1.jpg'

var i = 0;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingStyle: {
        color: '#fff'
      },
      hidden: true,
      img1Style: {
        display: "block"
      },
      img3Style: {
        
      }
    };

    this.showImg = this.showImg.bind(this);
  }

  showImg() {
      console.log("show img")

      if(i === 0) {
        this.setState({
          hidden: false,
          img1Style: {
            display: "none"
          },
          img2Style: {
            display: "block"
          }
        });
        i = 1;
      } else {
        this.setState({
          hidden: false,
          img1Style: {
            display: "block"
          },
          img2Style: {
            display: "none"
          }
        });
        i = 0;
      }
      
  }

  render() {
    return (
      <div className="App">
        <p style={this.state.headingStyle}>Gallery</p>
        <div className="galleryPic">
          <img src={img3} alt="img3" style={this.state.img3Style}/>
          <img src={img1} alt="img1" style={this.state.img1Style} onClick={this.showImg}/>          
        </div>
      </div>   
    );
  }
}

export default Gallery;
