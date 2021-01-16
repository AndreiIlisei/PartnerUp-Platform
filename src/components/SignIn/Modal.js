import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // backgroundColor: '#FFF',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0.5 , 0.5, 0.5, 0.9)',
  zIndex: 1000,
};

function Modal({ open, children, onClose }) {
    if (!open) return null 

    window.location.href = "/login"

  return ReactDom.createPortal(
    <>
      <div>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <span onClick={onClose}>X </span>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
