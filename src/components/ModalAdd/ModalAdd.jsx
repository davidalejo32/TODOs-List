import React from "react";
import { createPortal } from "react-dom";
import './ModalAdd.scss';

function ModalAdd (props) {
  return createPortal(
    <div className="modalAdd">
      {props.children}
    </div>,
    document.getElementById('modalAdd')
  )
}

export { ModalAdd }