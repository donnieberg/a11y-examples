import React, { Component } from 'react';

import MediaObject from 'design-system-react/components/media-object';
import Icon from 'design-system-react/components/icon';
import MenuDropdown from 'design-system-react/components/menu-dropdown';
import DropdownTrigger from 'design-system-react/components/menu-dropdown/button-trigger';
import Button from 'design-system-react/components/button/';

class GoodA11yExample extends Component {
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
				<a href="javascript:void(0)">Good accessibility!</a>
				<div className="slds-size_1-of-4 center">
					<img
						alt="photo of company van covered in branded images of cartoon grass, water drops, and sprinklers. Back of van says 'Blake Shelton Landscaping'."
						src="./assets/images/DLFUfUxXcAAUQOs.png"
						className="db wi-full" />
					<div>
						<header className="pts">
							<MediaObject
								body={this.renderBody()}
								figure={<Icon assistiveText="Avatar icon" category="standard" name="user" size="medium" />}
								verticalCenter
							/>
						</header>
						<div className="df df-justify">
							<p className="f5">
								Um, way to expand your business portfolio <a href="javascript:void(0)">@blakeshelton</a>. Big congratulations. Way to diversify.
							</p>
							<MenuDropdown
								assistiveText="More actions"
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
							<button>
								<i className="text-lt-gray mrx fa fa-comment-o" />
								<span className="slds-assistive-text">Comment</span>
							</button>

							<button>
								<i className="text-lt-gray mrx fa fa-retweet" />
								<span className="slds-assistive-text">Retweet</span>
							</button>

							<button>
								<i className="text-lt-gray mrx fa fa-heart-o" />
								<span className="slds-assistive-text">Like</span>
							</button>
						</footer>
					</div>
				</div>
      </div>
    );
  }
}

export default GoodA11yExample;
