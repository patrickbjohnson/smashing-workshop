import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { CardList } from "./CardList";

let stories = storiesOf("Organisms/Lists-And-Collections/CardList", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <CardList />);
