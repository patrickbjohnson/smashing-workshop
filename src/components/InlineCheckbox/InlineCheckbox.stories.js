import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { InlineCheckbox } from "./InlineCheckbox";

let stories = storiesOf("Molecules/Forms/InlineCheckbox", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <InlineCheckbox />);
