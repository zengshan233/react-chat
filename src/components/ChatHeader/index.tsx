import React from 'react'
import { IContact } from '../../types'
import './style.css'

export default function ChatHeader(props: { data: IContact }) {
  return (
    <div className='chat_header_content'>
      <img className='avatar' src={props.data.avatar} />
      <div className='desc_area'>
      <span className='nickname'>{props.data.nickname}</span>
      <span className='sologan'>{props.data.desc}</span>
    </div>
    </div >
    )
}

ChatHeader.propTypes = {}
