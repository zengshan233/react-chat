import React from 'react';
import "./style.css";
import EmojiPopover from "../EmojiPopover";
import ImgPopover from "../ImgPopover";
export default function ChatToolBar(_ref) {
  var _ref$tools = _ref.tools,
    tools = _ref$tools === void 0 ? [] : _ref$tools,
    onEmojiSelect = _ref.onEmojiSelect,
    onImage = _ref.onImage;
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_tool_bar_content"
  }, typeof onEmojiSelect === 'function' && /*#__PURE__*/React.createElement(EmojiPopover, {
    onSelect: onEmojiSelect
  }), typeof onImage === 'function' && /*#__PURE__*/React.createElement(ImgPopover, {
    onImage: onImage
  }), tools.map(function (tool) {
    return tool;
  }));
}