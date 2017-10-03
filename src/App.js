import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './App.css';

import BadA11yExample from './BadA11yExample';
import GoodA11yExample from './GoodA11yExample';
import IconSettings from 'design-system-react/components/iconSettings';

class App extends Component {
  render() {
    return (
			<Router>
				<IconSettings iconPath="./assets/icons">
				<div className="ht-full df">
					<ul className="nav pvm slds-size_1-of-5 slds-border_right bg-navy text-aqua">
						<li className="f3 caps phm pvs text-aqua slds-border_bottom fw-bold">A11y Demo</li>
						<li className="f4"><NavLink className="db phm pvs" to="/badA11y">Bad Example</NavLink></li>
						<li className="f4"><NavLink className="db phm pvs" to="/goodA11y">Good Example</NavLink></li>
					</ul>
					<div className="pam slds-size_4-of-5">
						<Route path="/badA11y" component={BadA11yExample} />
						<Route path="/goodA11y" component={GoodA11yExample} />
					</div>
				</div>
				</IconSettings>
			</Router>
    );
  }
}

export default App;
