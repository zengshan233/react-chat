import React from 'react';
import style from "./style.module.css";
export default function ChatHeader(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: style.content
  }, /*#__PURE__*/React.createElement("img", {
    className: style.avatar,
    src: props.data.avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: style.desc_area
  }, /*#__PURE__*/React.createElement("span", {
    className: style.nickname
  }, props.data.nickname), /*#__PURE__*/React.createElement("span", {
    className: style.sologan
  }, props.data.desc)));
}
ChatHeader.propTypes = {};