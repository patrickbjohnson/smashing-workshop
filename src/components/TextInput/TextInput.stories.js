import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { TextInput } from "./TextInput";

let stories = storiesOf("Atoms/Forms/TextInput", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <TextInput />);
