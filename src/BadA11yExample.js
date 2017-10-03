import React, { Component } from 'react';

import MediaObject from 'design-system-react/components/media-object';
import Icon from 'design-system-react/components/icon';
import MenuDropdown from 'design-system-react/components/menu-dropdown';
import DropdownTrigger from 'design-system-react/components/menu-dropdown/button-trigger';
import Button from 'design-system-react/components/button/';

class BadA11yExample extends Component {
	renderAvatar () {
		return (
			<span className="slds-avatar slds-avatar_circle">
				<span className="slds-icon_container slds-icon-standard-user">
			 		<svg className="slds-icon" aria-hidden="false">
			 			<use xlinkHref="./assets/icons/standard-sprite/svg/symbols.svg#user" />
			 		</svg>
			 	</span>
			</span>
		)
	}

	renderBody () {
		return (
			<div className="df df-justify">
				<p>
					Brad Paisley
					<p className="db f5 text-lt-gray">@BradPaisley</p>
				</p>
				<p className="f5 text-lt-gray">
					Oct 1
				</p>
			</div>
		)
	}

  render() {
    return (
      <div>
				<a href="javascript:void(0)">Bad accessibility!</a>
				<div className="slds-size_1-of-4 center">
					<img src="./assets/images/DLFUfUxXcAAUQOs.png" className="db wi-full" />
					<div>
						<header className="pts">
							<MediaObject
								body={this.renderBody()}
								figure={this.renderAvatar()}
								verticalCenter
							/>
						</header>
						<div className="df df-justify">
							<p className="f5">
								Um, way to expand your business portfolio <a href="javascript:void(0)">@blakeshelton</a>. Big congratulations. Way to diversify.
							</p>
							<MenuDropdown
								iconName="switch"
								iconVariant="container"
								iconSize="small"
								isInline
								nubbinPosition="top left"
								onSelect={(value) => { console.log('selected: ', value); }}
								options={[
									{ label: 'Copy link to Tweet', value: 'A0' }
								]}
							/>
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
