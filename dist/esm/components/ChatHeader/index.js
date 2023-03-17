import React from 'react';
import "./style.css";
export default function ChatHeader(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_header_content"
  }, /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    src: props.data.avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "desc_area"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nickname"
  }, props.data.nickname), /*#__PURE__*/React.createElement("span", {
    className: "sologan"
  }, props.data.desc)));
}
ChatHeader.propTypes = {};