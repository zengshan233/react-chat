import { IChatProps } from '../../types'
declare function Chat(props: IChatProps): JSX.Element
declare namespace Chat {
  var defaultProps: {
    contact: {}
    me: {}
    chatList: never[]
    showLoadMore: boolean
    onSend: (msg: any) => void
  }
}
export default Chat
