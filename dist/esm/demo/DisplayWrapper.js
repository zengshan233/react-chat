import React from "react";
export default function DisplayWrapper(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, props.children);
}