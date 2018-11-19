import React, { Component } from "react";
import PropTypes from "prop-types";

export class PrimaryNav extends Component {
	render() {
		return (
			<nav className="c-primary-nav { this.props.styleModifier }">
				<ul className="c-primary-nav__list">
					{this.props.navitems.map(function(navitem, index) {
						return (
							<li
								className="c-primary-nav__item"
								key={`c-primary-nav__item-${index}`}
							>
								<a
									href={navitem.href}
									onClick={navitem.onClick}
								>
									{navitem.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

PrimaryNav.propTypes = {
	navitems: PropTypes.array.isRequired,
	href: PropTypes.string,
	text: PropTypes.string
};

PrimaryNav.defaultProps = {
	navitems: [
		{
			href: "#",
			text: "Nav Item"
		},
		{
			href: "#",
			text: "Nav Item"
		},
		{
			href: "#",
			text: "Nav Item"
		}
	]
};
