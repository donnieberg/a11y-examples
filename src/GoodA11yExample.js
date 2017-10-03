import React, { Component } from 'react';
import classNames from 'classnames';

import MediaObject from 'design-system-react/components/media-object';
import Icon from 'design-system-react/components/icon';
import MenuDropdown from 'design-system-react/components/menu-dropdown';
import DropdownTrigger from 'design-system-react/components/menu-dropdown/button-trigger';
import Button from 'design-system-react/components/button/';

class GoodA11yExample extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

	toggleLikeBtn = () => {
		this.setState({ isLiked: !this.state.isLiked });
	}

	renderBody () {
		return (
			<div className="df df-justify">
				<a href="javascript:void(0)">
					<h2 className="f4">
						Brad Paisley
					</h2>
					<p className="db f5 text-dr-gray">@BradPaisley</p>
				</a>
				<a href="javascript:void(0)" className="f5 text-dr-gray">
					Oct 1
				</a>
			</div>
		)
	}

  render() {
    return (
      <div>
				<article className="slds-size_2-of-6 center bas border-gray br-s">
					<a href="javascript: void(0)">
						<img
							alt="photo of company van covered in branded images of cartoon grass, water drops, and sprinklers. Back of van says 'Blake Shelton Landscaping'."
							src="./assets/images/DLFUfUxXcAAUQOs.png"
							className="db wi-full" />
					</a>
						<header className="pas">
							<MediaObject
								body={this.renderBody()}
								figure={<Icon category="standard" name="user" size="medium" />}
								verticalCenter
							/>
						</header>
						<div className="phs df df-justify">
							<p className="f5">
								Um, way to expand your business portfolio <a href="javascript:void(0)">@blakeshelton</a>. Big congratulations. Way to diversify.
							</p>
							<MenuDropdown
								isInline
								className="good-example"
								nubbinPosition="top left"
								onSelect={(value) => { console.log('selected: ', value); }}
								options={[
									{ label: 'Copy link to Tweet', value: 'A0' },
									{ label: 'Send direct message', value: 'B0' },
									{ label: 'Report Tweet', value: 'C0' }
								]}
							>
								<DropdownTrigger>
									<Button
										assistiveText="More actions"
										iconName="switch"
										iconVariant="container"
										iconSize="small"
										variant="icon"
									/>
								</DropdownTrigger>
							</MenuDropdown>
						</div>
						<footer className="pas df df-start">
							<button className="mrl" title="Comment">
								<i className="text-lt-gray fa fa-comment-o" aria-hidden="true" />
								<span className="slds-assistive-text">Comment</span>
							</button>

							<button className="mrl" title="Retweet">
								<i className="text-lt-gray fa fa-retweet" aria-hidden="true"  />
								<span className="slds-assistive-text">Retweet</span>
							</button>

							<button aria-pressed={this.state.isLiked} onClick={this.toggleLikeBtn} title="Like">
								<i className={classNames("text-lt-gray fa", {
									'fa-heart-o': !this.state.isLiked,
									'fa-heart': this.state.isLiked,
								})}
								aria-hidden="true" />
								<span className="slds-assistive-text">Like</span>
							</button>
						</footer>
				</article>
      </div>
    );
  }
}

export default GoodA11yExample;
