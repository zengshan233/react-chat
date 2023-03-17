import React, { useEffect, useState } from 'react'
import './style.css'
import cns from '../../utils/toClass'
import { IEmojiPopover } from '../../types'

const emojiList = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '😊',
  '😇',
  '🙂',
  '🙃',
  '😉',
  '😌',
  '😍',
  '🥰',
  '😘',
  '😗',
  '😙',
  '😚',
  '😋',
  '😛',
  '😝',
  '😜',
  '🤪',
  '🤨',
  '🧐',
  '🤓',
  '😎',
  '🤩',
  '🥳',
  '😏',
  '😒',
  '😞',
  '😔',
  '😟',
  '😕',
  '🙁',
  '😣',
  '😖',
  '😫',
  '😩',
  '🥺',
  '😢',
  '😭',
  '😤',
  '😠',
  '😡',
  '🤬',
  '🤯',
  '😳',
  '🥵',
  '🥶',
  '😱',
  '😨',
  '😰',
  '😥',
  '😓',
  '🤗',
  '🤔',
  '🤭',
  '🤫',
  '🤥',
  '😶',
  '😐',
  '😑',
  '😬',
  '🙄',
  '😯',
  '😦',
  '😧',
  '😮',
  '😲',
  '🥱',
  '😴',
  '🤤',
  '😪',
  '😵',
  '🤐',
  '🥴',
  '🤢',
  '🤮',
  '🤧',
  '😷',
  '🤒',
  '🤕',
]

export default function EmojiPopover({ onSelect }: IEmojiPopover) {
  const [visible, setVisible] = useState<boolean>(false)

  const switchEmojiModal = (vis: boolean) => {
    setVisible(vis)
  }

  const iconClickHandle = (emoji: string) => {
    onSelect(emoji)
  }

  useEffect(() => {
    addEventListener('click', (e: { target: any }) => {
      if (e.target.getAttribute('datatype') === 'emoji') {
        switchEmojiModal(true)
      } else {
        switchEmojiModal(false)
      }
    })
  }, [])

  return (
    <div className='emoji_content'>
      <div className='emoji_wrapper' style={{ display: visible ? 'block' : 'none' }}>
        {emojiList.map((emoji) => (
          <span
            onClick={iconClickHandle.bind(null, emoji)}
            className='emoji_item'
            datatype={emoji}
            key={emoji}>
            {emoji}
          </span>
        ))}
      </div>
      <div className='tool_icon emoji' datatype="emoji"></div>
    </div>
  )
}
