import * as mixins from "../../theme/mixins";
import { css } from "emotion";
import {
  optionWrapperMaxHeight,
  searchBoxHeight,
  initialPadding,
  onScrollPadding
} from "./OptionGroup.styles";
import { smallButtonHeight } from "./Button.styles";
export const optionGroupCheckBoxButtonWrapPadding = 20;

export const optionGroupCheckBoxWrap = css({
  maxHeight: `${optionWrapperMaxHeight +
    searchBoxHeight +
    2 * (initialPadding - onScrollPadding) +
    2 * optionGroupCheckBoxButtonWrapPadding +
    smallButtonHeight}`,
  position: "relative"
});

export const optionGroupCheckBoxButtonWrap = css({
  ...mixins.flexSpaceBetween,
  padding: `${optionGroupCheckBoxButtonWrapPadding}`
});