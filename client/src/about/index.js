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
import {
  Col,
  Container,
  Row } from 'reactstrap';


class AboutPage extends React.Component {
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
        <Container>
          <Row>
            <Col className="aboutPageMain">
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
    );
  }
}

export default AboutPage;
