import React, { Component } from 'react';

import MediaObject from 'design-system-react/components/media-object';
import Icon from 'design-system-react/components/icon';
import MenuDropdown from 'design-system-react/components/menu-dropdown';
import DropdownTrigger from 'design-system-react/components/menu-dropdown/button-trigger';
import Button from 'design-system-react/components/button/';

class BadA11yExample extends Component {
  render() {
    return (
      <div>
				<div className="slds-size_1-of-4 center">
					<img src="./assets/images/DLFUfUxXcAAUQOs.png" className="db wi-full" />
					<div>
						<header className="pts">
							<MediaObject
								body={
									<div className="df df-justify">
										<p>
											Brad Paisley
											<p className="db f5 text-lt-gray">@BradPaisley</p>
										</p>
										<p className="f5 text-lt-gray">
											Oct 1
										</p>
									</div>
								}
								figure={<Icon category="standard" name="user" size="medium" />}
								verticalCenter
							/>
						</header>
						<div className="df df-justify">
							<p className="f5">
								Um, way to expand your business portfolio <a href="javascript:void(0)">@blakeshelton</a>. Big congratulations. Way to diversify.
							</p>
							<MenuDropdown
								nubbinPosition="top left"
								onSelect={(value) => { console.log('selected: ', value); }}
								options={[
									{ label: 'Copy link to Tweet', value: 'A0' }
								]}
							>
								<DropdownTrigger>
									<Button
										iconName="switch"
										iconSize="small"
										variant="icon"
									/>
								</DropdownTrigger>
							</MenuDropdown>
						</div>
						<footer className="pts">
							<button><i className="text-lt-gray mrx fa fa-comment-o" /></button>
							<button><i className="text-lt-gray mrx fa fa-retweet" /></button>
							<button><i className="text-lt-gray mrx fa fa-heart-o" /></button>
						</footer>
					</div>
				</div>
      </div>
    );
  }
}

export default BadA11yExample;
