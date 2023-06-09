import { CSSProperties, MouseEventHandler, ReactNode, UIEventHandler } from 'react'
export interface IChatProps {
  onSend: Function
  me: IContact
  contact: IContact
  chatList: any[]
  onImage?: Function
  showLoadMore?: boolean
  style?: ChatStyle
  onEarlier?: MouseEventHandler
}
export interface ChatStyle {
  chatBg?: any
}
export interface IContact {
  id?: number | string
  avatar?: string
  nickname?: string
  message?: string
  date?: string
  desc?: string
}
export interface IContactItem {
  styles?: CSSProperties
  selected?: boolean
  border?: boolean
  contact?: IContact
  onClick?: Function
}
export interface IChatRecordList {
  onEarlier?: MouseEventHandler
  data: any[]
  me: IContact
  style?: ChatStyle
  showLoadMore?: boolean
}
export interface IChatToolBar {
  tools?: any[]
  onEmojiSelect?: Function
  onImage?: Function
}
export interface IContactList {
  onSelect?: Function
  data: IContact[]
  onScroll?: UIEventHandler<HTMLDivElement>
}
export interface IEmojiPopover {
  onSelect: Function
}
export interface IImgPopover {
  onImage: Function
}
export interface IMsgBubble {
  data: IPureMsg
  isMe: boolean
}
export interface IMsgItem {
  data: IMessage
  me: IContact
}
export interface IScrollWrapper {
  data: Object[]
  style?: CSSProperties
  scrollToBottom?: boolean
  children?: ReactNode
}
export interface IChatInput {
  me: IContact
  onSend: Function
  onImage?: Function
}
export declare type IMessageType = 'text' | 'image'
export interface IPureMsg {
  type: IMessageType
  content: string
}
export interface IMessage {
  _id: string
  date: number
  user: IContact
  message: IPureMsg
}
