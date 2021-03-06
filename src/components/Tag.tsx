import * as React from "react";
import { colors } from "../theme";
import { tagStyle } from "./styles/Tag.styles";
import { TagProps } from "./typings/Tag";
import { cx } from "emotion";
import Ink from "react-ink";

const Tag: React.SFC<TagProps> = ({ label, color, onClose, className }) => {
  const wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  const _className = cx(wrapperClassName, className)
  return (
    <div
      className={_className}
      style={{
        color: colors[color].base,
        backgroundColor: colors[color].lightest || colors[color].light
      }}
    >
      {label}{" "}
      {onClose && (
        <i onClick={onClose} className="pi pi-close">
          <Ink />
        </i>
      )}
    </div>
  );
};

export default Tag;
