import Messages from './Messages'
import {updateNewMessageBodyCreator , sendMessageCreator} from '../../Redux/messages-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

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

let AuthRedirectComponent = withAuthRedirect(Messages)

const MessageContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default MessageContainer;
