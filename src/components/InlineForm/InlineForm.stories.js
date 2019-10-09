import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { InlineForm } from "./InlineForm";

let stories = storiesOf("Molecules/Forms/InlineForm", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => (
	<InlineForm
		label="Search"
		method="post"
		action="http://google.com"
		id="demo-form-id"
		placeholder="Placeholder"
		cta="Action"
	/>
));
