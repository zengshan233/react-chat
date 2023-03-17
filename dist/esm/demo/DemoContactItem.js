import React from 'react';
import { ContactItem } from 'react-jwchat';
import { contact } from "./displayData";
import DisplayWrapper from "./DisplayWrapper";
export default function DemoContactList() {
  return /*#__PURE__*/React.createElement(DisplayWrapper, null, /*#__PURE__*/React.createElement(ContactItem, {
    contact: contact
  }));
}