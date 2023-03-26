import React from 'react'
import style from './style.module.css'
import MsgBubble from '../MsgBubble'
import dayjs from 'dayjs'
export default function MsgItem(_ref) {
  var data = _ref.data,
    me = _ref.me
  var isMe = data.user.id === me.id
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: style.content,
      style: {
        flexDirection: isMe ? 'row-reverse' : 'row',
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: style.avatar,
      },
      /*#__PURE__*/ React.createElement('img', {
        src: data.user.avatar,
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: style.text_area,
        style: {
          alignItems: isMe ? 'flex-end' : 'flex-start',
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: style.comment_area,
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: style.nickname_text,
          },
          data.user.nickname,
        ),
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: style.date_text,
          },
          dayjs.unix(data.date).format('MM/DD HH:mm'),
        ),
      ),
      /*#__PURE__*/ React.createElement(MsgBubble, {
        isMe: isMe,
        data: data.message,
      }),
    ),
  )
}
