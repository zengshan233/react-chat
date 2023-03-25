import React, { ChangeEvent, ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import style from './style.module.css'
import md5 from 'md5'
import dayjs from 'dayjs'
import ChatToolBar from '../ChatToolsBar'
import { IChatInput, IMessage } from '../../types'

export default function ChatInput({ me, onSend = () => {}, onImage, height }: IChatInput) {
  const [text, setText] = useState('')
  const [isShift, setIsShift] = useState(false)
  const [isAllowSend, setIsAllowSend] = useState(false)

  const textChangeHandle: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isAllowSend = !!e.target.value.trim()
    const text = e.target.value

    setText(text)
    setIsAllowSend(isAllowSend)
  }

  const sendHandle = () => {
    if (!isAllowSend) {
      return
    }

    const randomNum = Math.floor(Math.random() * 1000)
    const date = dayjs().unix()

    const msgData: IMessage = {
      _id: md5(`${text}${date}${randomNum}`),
      date: date,
      user: me,
      message: {
        type: 'text',
        content: text,
      },
    }
    onSend(msgData)
    resetText()
  }

  const resetText = () => {
    setText('')
    setIsAllowSend(false)
  }

  const keyDownHandle: KeyboardEventHandler = (e) => {
    if (e.keyCode === 16) {
      setIsShift(true)
    }

    if (e.keyCode === 13 && !isShift) {
      e.preventDefault()
      sendHandle()
    }
  }

  const keyUpHandle: KeyboardEventHandler = (e) => {
    if (e.keyCode === 16) {
      setIsShift(false)
    }
  }

  const emojiSelectHandle = (emoji: string) => {
    setText(text + emoji)
    setIsAllowSend(true)
  }

  return (
    <div className={style.content}>
      <textarea
        className={style.input_area}
        onKeyUp={keyUpHandle}
        onKeyDown={keyDownHandle}
        onChange={textChangeHandle}
        value={text}
        placeholder="Send your message..."
      ></textarea>
      <ChatToolBar onEmojiSelect={emojiSelectHandle} onImage={onImage} />
      <div className={style.but_area} onClick={sendHandle}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1401 2.96004L7.11012 5.96004C1.04012 7.99004 1.04012 11.3 7.11012 13.32L9.79012 14.21L10.6801 16.89C12.7001 22.96 16.0201 22.96 18.0401 16.89L21.0501 7.87004C22.3901 3.82004 20.1901 1.61004 16.1401 2.96004ZM16.4601 8.34004L12.6601 12.16C12.5101 12.31 12.3201 12.38 12.1301 12.38C11.9401 12.38 11.7501 12.31 11.6001 12.16C11.3101 11.87 11.3101 11.39 11.6001 11.1L15.4001 7.28004C15.6901 6.99004 16.1701 6.99004 16.4601 7.28004C16.7501 7.57004 16.7501 8.05004 16.4601 8.34004Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
