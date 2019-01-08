 /**
 *  <passwordGenerator.js>
 *
 */

import React from 'react';

class PasswordGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwords: []
    }
  };


  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;

    return (
      <div className="pw-gen">
          {/* Render the passwords if we have them */}
          {passwords.length ? (
          <div>
              <h2 className="passwordGenH1">Random generated codes. 
              Straight from the server!</h2>
              <ul className="passwords">
              {/*
                  Generally it's bad to use "index" as a key.
                  It's ok for this example because there will always
                  be the same number of passwords, and they never
                  change positions in the array.
              */}
              {passwords.map((password, index) =>
                  <li key={index}>
                  {password}
                  </li>
              )}
              </ul>
              <button
              className="more"
              onClick={this.getPasswords}>
              Get Some More
              </button>
          </div>
          ) : (
          // Render a helpful message otherwise
          <div>
              <h2>No passwords. Press the button</h2>
              <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
              </button>
          </div>
          )}
      </div>
      
    );
  }
}

export default PasswordGen;