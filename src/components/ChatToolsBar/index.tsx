import React from 'react'
import  './style.css'
import EmojiPopover from '../EmojiPopover'
import ImgPopover from '../ImgPopover'
import { IChatToolBar } from '../../types'

export default function ChatToolBar({ tools = [], onEmojiSelect, onImage }: IChatToolBar) {
  return (
    <div className='chat_tool_bar_content'>
      {typeof onEmojiSelect === 'function' && <EmojiPopover onSelect={onEmojiSelect} />}
      {typeof onImage === 'function' && <ImgPopover onImage={onImage} />}
      {tools.map((tool) => tool)}
    </div>
    )
}
