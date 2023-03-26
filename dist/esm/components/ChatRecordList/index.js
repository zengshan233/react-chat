function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends.apply(this, arguments)
}
import React from 'react'
import style from './style.module.css'
import MsgItem from '../MsgItem'
import cns from '../../utils/toClass'
var ChatRecordList = function ChatRecordList(props) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: cns([style.list_area]),
    },
    props.showLoadMore &&
      /*#__PURE__*/ React.createElement(
        'div',
        null,
        /*#__PURE__*/ React.createElement(
          'button',
          {
            className: style.load_more,
            onClick: props.onEarlier,
          },
          'Load more\xB7\xB7\xB7',
        ),
      ),
    props.data.map(function (bubble) {
      return /*#__PURE__*/ React.createElement(
        MsgItem,
        _extends({}, props, {
          data: bubble,
          key: bubble._id,
        }),
      )
    }),
  )
}
export default ChatRecordList
