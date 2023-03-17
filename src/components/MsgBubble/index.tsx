import React from 'react'
import './style.css'
import cns from '../../utils/toClass'
import { IMsgBubble, IPureMsg } from '../../types'

export default function MsgBubble({ data, isMe }: IMsgBubble) {
  const renderContent = (message: IPureMsg) => {
    switch (message.type) {
      case 'text':
        return message.content
      case 'image':
        return <img className='img_content' src={message.content} />
      default:
        break
    }
  }

  return (
    <div
      className={
        `msg_bubble text_content arrow ${isMe ? 'arrow_right' : 'arrow_left'}`
      }>
      {renderContent(data)}
    </div>
  )
}
