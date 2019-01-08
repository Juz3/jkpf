 /**
 *  <index.js>
 *
 *  Copyright information
 *
 *      Copyright (C) 2019 Jussi Koivumäki <firstname.lastname@cs.tamk.fi>
 *
 * @author Jussi Koivumäki
 * 
 *
 */

import React from 'react';
import {
  Col,
  Container,
  Row } from 'reactstrap';

import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      headingStyle: {
        color: '#fff'
      },
    };
  }

  render() {
    return (
      <div>
        <div className="onlyBgColor">
        <Container>
          <Row>
            <Col className="aboutColTop">
              <h2 style={this.state.headingStyle}>About</h2>
              <p style={this.state.headingStyle}><strong>Description:</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien tellus, 
                condimentum fermentum velit vitae, lobortis dapibus turpis. Vivamus aliquam orci 
                ullamcorper urna aliquam, non dignissim mauris sollicitudin. Pellentesque tincidunt 
                ut augue et mattis. Suspendisse elementum, sapien a tempor vulputate, ipsum elit 
                aliquet ex, eu mollis risus lacus eget justo. </p>
            </Col>
          </Row>
        </Container>
        </div>
      </div>   
    );
  }
}

export default AboutPage;
