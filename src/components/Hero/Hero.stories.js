import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Hero } from "./Hero";
import heroImg from "../../images/fpo-1200x650.png";

let stories = storiesOf("Molecules/Blocks/Hero", module);

stories.addDecorator(withKnobs);

const hero = {
	imgsrc: { heroImg },
	imgalt: "Alt text",
	title: "Hero Title",
	description: "This is the hero description"
};

stories.add("Default", () => (
	<Hero
		imgsrc={heroImg}
		imgalt="Alt Txt"
		title="Hero Title"
		description="Hero description"
	/>
));
