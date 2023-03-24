function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import style from "./style.module.css";
import ChatInput from "../ChatInput";
import ChatRecordList from "../ChatRecordList";
import ScrollWrapper from "../ScrollWrapper";
import ChatHeader from "../ChatHeader";
var textHeight = 150;
var WrappedChatRecordList = ScrollWrapper(ChatRecordList);
var defaultChatProps = {
  style: {
    width: 600,
    height: 500
  },
  contact: {},
  me: {},
  chatList: [],
  onSend: function onSend(msg) {
    return console.warn('传入onSend属性，用于接收输入框内容', msg);
  }
};
Chat.defaultProps = defaultChatProps;
export default function Chat(props) {
  var sendHandle = function sendHandle(msgData) {
    props.onSend(msgData);
  };
  var listHeight = props.style.height - textHeight - 60;
  return /*#__PURE__*/React.createElement("div", {
    className: style.content,
    style: props.style
  }, /*#__PURE__*/React.createElement(ChatHeader, {
    data: props.contact
  }), /*#__PURE__*/React.createElement(WrappedChatRecordList, _extends({}, props, {
    data: props.chatList,
    style: {
      height: listHeight
    },
    scrollToBottom: true
  })), /*#__PURE__*/React.createElement(ChatInput, _extends({}, props, {
    height: textHeight,
    onSend: sendHandle,
    onImage: props.onImage
  })));
}