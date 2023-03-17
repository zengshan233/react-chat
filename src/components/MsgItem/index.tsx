import React from 'react'
import './style.css'
import MsgBubble from '../MsgBubble'
import dayjs from 'dayjs'
import { IMsgItem } from '../../types'

export default function MsgItem({ data, me }: IMsgItem) {
  const isMe = data.user.id === me.id

  return (
    <div
      className='msg_item_content'
      style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}>
      <div className='avatar'>
        <img src={data.user.avatar} />
      </div>
      <div className='text_area' style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}>
        <div className='comment_area'>
          <span className='nickname_text'>{data.user.nickname}</span>
          <span className='date_text'>{dayjs.unix(data.date).format('MM-DD HH:mm:ss')}</span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  )
}
