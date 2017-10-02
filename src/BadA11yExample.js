import React, { Component } from 'react';
import salesforceLogo from './assets/DF14_Alternate_Cloud_4C.jpg'

class BadA11yExample extends Component {
  render() {
    return (
      <div style={{ marginTop: '200px', display: 'flex', alignItems: 'center'}}>
					<img src={salesforceLogo} alt="" width="408" height="206" />
					<span style={{ fontSize: '3rem', marginLeft: '-2rem' }}>Salesforce</span>
      </div>
    );
  }
}

export default BadA11yExample;
