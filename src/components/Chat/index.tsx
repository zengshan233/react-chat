import React from 'react'
import style from './style.module.css'
import ChatInput from '../ChatInput'
import ChatRecordList from '../ChatRecordList'
import ScrollWrapper from '../ScrollWrapper'
import { IChatProps } from '../../types'
import ChatHeader from '../ChatHeader'

const WrappedChatRecordList = ScrollWrapper(ChatRecordList)

const defaultChatProps = {
  contact: {},
  me: {},
  chatList: [],
  showLoadMore: false,
  style: {
    chatBg: '#F5F3F0',
  },
  onSend: (msg: any) => console.warn('传入onSend属性，用于接收输入框内容', msg),
}

Chat.defaultProps = defaultChatProps

export default function Chat(props: IChatProps) {
  const sendHandle = (msgData: any) => {
    props.onSend(msgData)
  }

  return (
    <div className={style.content}>
      <ChatHeader data={props.contact} />
      <WrappedChatRecordList {...props} data={props.chatList} scrollToBottom />
      <ChatInput {...props} onSend={sendHandle} onImage={props.onImage} />
    </div>
  )
}
