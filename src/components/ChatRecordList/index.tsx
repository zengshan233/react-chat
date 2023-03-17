import React from 'react'
import './style.css'
import MsgItem from '../MsgItem'
import { IChatRecordList } from '../../types'

const ChatRecordList = (props: IChatRecordList) => {
  return (
    <div className='chat_record_list_area'>
      <div>
        <button className='load_more' onClick={props.onEarlier}>
          加载更多···
        </button>
      </div>
      {props.data.map((bubble) => (
        <MsgItem {...props} data={bubble} key={bubble._id} />
        ))}
    </div>
    )
}

export default ChatRecordList
