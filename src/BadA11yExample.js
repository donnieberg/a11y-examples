import React, { Component } from 'react';
import classNames from 'classnames';

import MediaObject from 'design-system-react/components/media-object';
import Icon from 'design-system-react/components/icon';
import Button from 'design-system-react/components/button/';

class BadA11yExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
			isMenuOpen: false,
			isLiked: false
		};
  }

	toggleMenu = () => {
		this.setState({ isMenuOpen: !this.state.isMenuOpen });
	}

	toggleLikeBtn = () => {
		this.setState({ isLiked: !this.state.isLiked });
	}

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
				<a href="javascript:void(0)">
					<h2 className="f4">
						Brad Paisley
					</h2>
					<p className="db f5 text-lt-gray">@BradPaisley</p>
				</a>
				<a href="javascript:void(0)" className="f5 text-lt-gray">
					Oct 1
				</a>
			</div>
		)
	}

	renderMenu () {
		return (
			<div className="slds-dropdown slds-dropdown_left slds-nubbin_top-left bad-example">
			  <ul className="slds-dropdown__list">
			     <li className="slds-dropdown__item">
			       <a href="javascript:void(0);" onClick={this.toggleMenu}>
			         <span className="slds-truncate">Copy link to Tweet</span>
			       </a>
			     </li>
			     <li className="slds-dropdown__item">
			       <a href="javascript:void(0);" onClick={this.toggleMenu}>
			         <span className="slds-truncate">Send direct message</span>
			       </a>
			     </li>
			     <li className="slds-dropdown__item">
			       <a href="javascript:void(0);" onClick={this.toggleMenu}>
			         <span className="slds-truncate">Report Tweet</span>
			       </a>
			     </li>
			  </ul>
			</div>
		)
	}

  render() {
    return (
      <div>
				<article className="slds-size_2-of-6 center bas border-gray br-s">
					<a href="javascript: void(0)">
						<img src="./assets/images/DLFUfUxXcAAUQOs.png" className="db wi-full" />
					</a>
					<header className="pas">
						<MediaObject
							body={this.renderBody()}
							figure={this.renderAvatar()}
							verticalCenter
						/>
					</header>
					<div className="phs df df-justify">
						<p className="f5">
							Um, way to expand your business portfolio <a href="javascript:void(0)">@blakeshelton</a>. Big congratulations. Way to diversify.
						</p>

						<div className={classNames("slds-dropdown-trigger slds-dropdown-trigger_click", {
							'slds-is-open': this.state.isMenuOpen
						})}>
							<Button
								iconName="switch"
								iconVariant="container"
								iconSize="small"
								onClick={this.toggleMenu}
								variant="icon"
							/>
							{ this.state.isMenuOpen ? this.renderMenu() : null }
						</div>
					</div>
					<footer className="pas df df-start bad-example">

						<button className="mrl"><i className="text-lt-gray fa fa-comment-o" /></button>
						<button className="mrl"><i className="text-lt-gray fa fa-retweet" /></button>
						<button onClick={this.toggleLikeBtn}>
								<i className={classNames("text-lt-gray fa", {
									'fa-heart-o': !this.state.isLiked,
									'fa-heart': this.state.isLiked,
								})}
								/>
							</button>
					</footer>
				</article>
      </div>
    );
  }
}

export default BadA11yExample;
