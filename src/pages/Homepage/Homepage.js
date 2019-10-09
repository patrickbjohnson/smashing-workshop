import PropTypes from "prop-types";
import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { CardList } from "../../components/CardList/CardList";
import { TextPassage } from "../../components/TextPassage/TextPassage";
import { Footer } from "../../components/Footer/Footer";

export class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />

				<main role="main">
					<Hero
						title={this.props.heroTitle}
						description={this.props.heroDescription}
						imgsrc={this.props.heroImgSrc}
						imgalt={this.props.heroImgAlt}
					/>
					<Section
						title={this.props.section1Title}
						description={this.props.section1Description}
					>
						<CardList cardListItems={this.props.cardListItems} />
					</Section>

					<Section
						title={this.props.section2Title}
						description={this.props.section2Description}
					>
						<div className="l-linelength-container">
							<TextPassage>{this.props.children}</TextPassage>
						</div>
						{/* end l-linelength-container */}
					</Section>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

Homepage.propTypes = {
	heroTitle: PropTypes.string,
	heroDescription: PropTypes.string,
	heroImgSrc: PropTypes.string,
	heroImgAlt: PropTypes.string,
	section1Title: PropTypes.string,
	section1Description: PropTypes.string,
	cardListItems: PropTypes.array,
	section2Title: PropTypes.string,
	section2Description: PropTypes.string
};

import heroImg from "../../images/fpo-1200x650.png";

Homepage.defaultProps = {
	heroTitle: "Hero Title",
	heroDescription: "this is the hero description",
	heroImgSrc: heroImg,
	heroImgAlt: "Alt Text",
	section1Title: "Section 1 Title",
	section1Description: "Section 1 description",
	cardListItems: [
		{
			styleModifier: "c-card--dark",
			title: "Card 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
	],
	section2Title: "Section 2 Title",
	section2Description: "Section 2 description"
};
