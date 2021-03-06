import * as React from "react";
import { ModalProps } from "./typings/Modal";
import { modalContainer } from "./styles/Modal.styles";
import { cx } from "emotion";
import isBrowser from "is-in-browser";
import * as ReactDOM from "react-dom";

class Modal extends React.PureComponent<ModalProps> {
  node: HTMLDivElement;

  componentDidMount() {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.visible === this.props.visible) return;

    if (this.props.visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "";
    }
  }

  render() {
    if (!isBrowser) return null;

    const { children, visible, className } = this.props;

    if (!this.node) {
      this.node = document.createElement("div");
    }

    return visible
      ? ReactDOM.createPortal(
          <div className={cx(modalContainer, "ReactPortal", className)}>
            {children}
          </div>,
          this.node
        )
      : null;
  }
}

export default Modal;
