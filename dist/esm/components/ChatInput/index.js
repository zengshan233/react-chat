function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import "./style.css";
import md5 from 'md5';
import dayjs from 'dayjs';
import ChatToolBar from "../ChatToolsBar";
export default function ChatInput(_ref) {
  var me = _ref.me,
    _ref$onSend = _ref.onSend,
    onSend = _ref$onSend === void 0 ? function () {} : _ref$onSend,
    onImage = _ref.onImage,
    height = _ref.height;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShift = _useState4[0],
    setIsShift = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAllowSend = _useState6[0],
    setIsAllowSend = _useState6[1];
  var textChangeHandle = function textChangeHandle(e) {
    var isAllowSend = !!e.target.value.trim();
    var text = e.target.value;
    setText(text);
    setIsAllowSend(isAllowSend);
  };
  var sendHandle = function sendHandle() {
    if (!isAllowSend) {
      return;
    }
    var randomNum = Math.floor(Math.random() * 1000);
    var date = dayjs().unix();
    var msgData = {
      _id: md5("".concat(text).concat(date).concat(randomNum)),
      date: date,
      user: me,
      message: {
        type: 'text',
        content: text
      }
    };
    onSend(msgData);
    resetText();
  };
  var resetText = function resetText() {
    setText('');
    setIsAllowSend(false);
  };
  var keyDownHandle = function keyDownHandle(e) {
    if (e.keyCode === 16) {
      setIsShift(true);
    }
    if (e.keyCode === 13 && !isShift) {
      e.preventDefault();
      sendHandle();
    }
  };
  var keyUpHandle = function keyUpHandle(e) {
    if (e.keyCode === 16) {
      setIsShift(false);
    }
  };
  var emojiSelectHandle = function emojiSelectHandle(emoji) {
    setText(text + emoji);
    setIsAllowSend(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_input_content",
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement(ChatToolBar, {
    onEmojiSelect: emojiSelectHandle,
    onImage: onImage
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "input_area",
    onKeyUp: keyUpHandle,
    onKeyDown: keyDownHandle,
    onChange: textChangeHandle,
    value: text,
    placeholder: "\u8BF7\u8F93\u5165..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "but_area"
  }, /*#__PURE__*/React.createElement("button", {
    className: "but",
    onClick: sendHandle,
    disabled: !isAllowSend
  }, "\u53D1\u9001")));
}