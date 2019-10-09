import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { PrimaryNav } from "./PrimaryNav";

let stories = storiesOf("Molecules/Navigation/PrimaryNav", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <PrimaryNav />);
