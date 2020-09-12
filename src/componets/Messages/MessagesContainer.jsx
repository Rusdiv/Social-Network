import Messages from './Messages'
import {updateNewMessageBodyCreator , sendMessageCreator} from '../../Redux/messages-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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




export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Messages);;
