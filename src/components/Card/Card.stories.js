import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { Card } from "./Card";

let stories = storiesOf("Molecules/Blocks/Card", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <Card>This is the card body.</Card>);

stories.add("Dark", () => (
	<Card
		theme="dark"
		title="Dark Card Title"
		description="This is the card description"
	>
		This is the card body.
	</Card>
));
