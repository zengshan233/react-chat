import { IChatProps } from '../../types'
declare function Chat(props: IChatProps): JSX.Element
declare namespace Chat {
  var defaultProps: {
    contact: {}
    me: {}
    chatList: never[]
    showLoadMore: boolean
    style: {
      chatBg: string
    }
    onSend: (msg: any) => void
  }
}
export default Chat
