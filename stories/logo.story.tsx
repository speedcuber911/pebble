import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number, color } from "@storybook/addon-knobs";
import Logo from "../src/components/Logo";

storiesOf("Logo", module).add("test", () => (
  <Logo
    height={number("height", 50)}
    width={number("width")}
    color={color("color", "#000")}
  />
));
