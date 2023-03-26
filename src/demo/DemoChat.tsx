import React, { useState } from 'react'
import { Chat } from 'react-jwchat'
import { contact, my } from './displayData'
import DisplayWrapper from './DisplayWrapper'

export default function DemoChat() {
  const [chatListData, setChatListData] = useState<any[]>([])
  return (
    <DisplayWrapper>
      <Chat
        contact={contact}
        me={my}
        chatList={chatListData}
        onSend={(msg: any) => setChatListData([...chatListData, msg])}
        onEarlier={() => console.log('EarlierEarlier')}
      />
    </DisplayWrapper>
  )
}
