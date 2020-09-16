import Messages from './Messages'
import { sendMessageCreator } from '../../Redux/messages-reducer'
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
    sendMessage: (newMwssageBody) => {
      dispatch(sendMessageCreator(newMwssageBody));
    },
  }
}




export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Messages);;
