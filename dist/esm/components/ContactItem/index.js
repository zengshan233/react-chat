import React from 'react';
import style from "./style.module.css";
import cns from "../../utils/toClass";
export default function ContactItem(props) {
  var _props$contact, _props$contact2, _props$contact3, _props$contact4;
  return /*#__PURE__*/React.createElement("div", {
    style: props.styles,
    className: cns([style.content, props.border && style.bottom_border, props.selected && style.selected]),
    onClick: props.onClick.bind(null, props.contact)
  }, /*#__PURE__*/React.createElement("img", {
    className: style.icon,
    src: (_props$contact = props.contact) === null || _props$contact === void 0 ? void 0 : _props$contact.avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: style.info_area
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(style.nickname, " ").concat(style.ellipsis)
  }, (_props$contact2 = props.contact) === null || _props$contact2 === void 0 ? void 0 : _props$contact2.nickname), /*#__PURE__*/React.createElement("span", {
    className: "".concat(style.desc, " ").concat(style.ellipsis)
  }, (_props$contact3 = props.contact) === null || _props$contact3 === void 0 ? void 0 : _props$contact3.message)), /*#__PURE__*/React.createElement("span", {
    className: style.date_area
  }, (_props$contact4 = props.contact) === null || _props$contact4 === void 0 ? void 0 : _props$contact4.date));
}
ContactItem.defaultProps = {
  onClick: function onClick() {}
};