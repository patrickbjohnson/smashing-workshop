import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Header } from "./Header";

let stories = storiesOf("Organisms/Global/Header", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <Header />);
