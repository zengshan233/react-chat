import React from 'react';
import "./style.css";
export default function ContactItem(props) {
  var _props$contact, _props$contact2, _props$contact3, _props$contact4;
  return /*#__PURE__*/React.createElement("div", {
    style: props.styles,
    className: "contact_item_content ".concat(props.border ? 'bottom_border' : '', " ").concat(props.selected ? 'selected' : ''),
    onClick: props.onClick && props.onClick.bind(null, props.contact)
  }, /*#__PURE__*/React.createElement("img", {
    className: "icon",
    src: (_props$contact = props.contact) === null || _props$contact === void 0 ? void 0 : _props$contact.avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "info_area"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nickname ellipsis"
  }, (_props$contact2 = props.contact) === null || _props$contact2 === void 0 ? void 0 : _props$contact2.nickname), /*#__PURE__*/React.createElement("span", {
    className: "desc ellipsis"
  }, (_props$contact3 = props.contact) === null || _props$contact3 === void 0 ? void 0 : _props$contact3.message)), /*#__PURE__*/React.createElement("span", {
    className: "date_area"
  }, (_props$contact4 = props.contact) === null || _props$contact4 === void 0 ? void 0 : _props$contact4.date));
}
ContactItem.defaultProps = {
  onClick: function onClick() {}
};