import * as PopperJS from "popper.js";

export interface TooltipProps {
  text: string | JSX.Element;
  placement?: PopperJS.Placement;
  label: (args: { ref: React.RefObject<any> }) => JSX.Element;
  modifiers?: PopperJS.Modifiers;
  isOpen?: boolean;
  isError?: boolean;
  disabled?: boolean;
}

export interface TooltipState {
  isOpen: boolean;
}
