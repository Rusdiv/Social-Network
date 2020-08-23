import Messages from './Messages'
import {updateNewMessageBodyCreator , sendMessageCreator} from '../../Redux/messages-reducer'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
  return {
    messagesPage : state.messagesPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
      dispatch(updateNewMessageBodyCreator(''));
    },
  }
}

const MessageContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessageContainer;
