import React from 'react';
import "./style.css";
export default function MsgBubble(_ref) {
  var data = _ref.data,
    isMe = _ref.isMe;
  var renderContent = function renderContent(message) {
    switch (message.type) {
      case 'text':
        return message.content;
      case 'image':
        return /*#__PURE__*/React.createElement("img", {
          className: "img_content",
          src: message.content
        });
      default:
        break;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "msg_bubble text_content arrow ".concat(isMe ? 'arrow_right' : 'arrow_left')
  }, renderContent(data));
}