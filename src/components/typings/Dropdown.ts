import * as React from "react";
import { ButtonType } from "./Button";

//todo same padding for date and dropdown
export interface DropdownProps {
  children: (args: { toggle: () => void }) => JSX.Element | string;
  buttonLabel?: React.ReactChildren | string;
  closeOnClickOutside?: boolean;
  type?: ButtonType;
  labelComponent?: (
    arg: { isOpen: boolean; toggleDropdown: () => void }
  ) => JSX.Element;
  padding?: number | string;
  className?: string;
  dropDownClassName?: string;
  initiallyOpen?: boolean;
  isSelected?: boolean;
}

export interface DropdownState {
  isOpen: boolean;
}