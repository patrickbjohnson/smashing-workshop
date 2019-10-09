import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Textarea } from "./Textarea";

let stories = storiesOf("Atoms/Forms/Textarea", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <Textarea />);
