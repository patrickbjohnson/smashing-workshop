import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Footer } from "./Footer";

let stories = storiesOf("Organisms/Global/Footer", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <Footer>Hello Footer</Footer>);
