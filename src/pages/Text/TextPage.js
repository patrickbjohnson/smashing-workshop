import PropTypes from "prop-types";
import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { TextPassage } from "../../components/TextPassage/TextPassage";
import { Footer } from "../../components/Footer/Footer";

export class TextPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Header navitems={this.props.navitems} />

				<main role="main">
					<div className="l-linelength-container">
						<PageHeader
							title={this.props.title}
							description={this.props.description}
						/>
						<TextPassage>{this.props.children}</TextPassage>
					</div>
				</main>

				<Footer />
			</React.Fragment>
		);
	}
}

TextPage.propTypes = {
	section1Title: PropTypes.string,
	section1Description: PropTypes.string,
	cardListItems: PropTypes.array,
	section2Title: PropTypes.string,
	section2Description: PropTypes.string
};

import heroImg from "../../images/fpo-1200x650.png";

TextPage.defaultProps = {
	section1Title: "Section 1 Title",
	section1Description: "Section 1 description",
	section2Title: "Section 2 Title",
	section2Description: "Section 2 description"
};
