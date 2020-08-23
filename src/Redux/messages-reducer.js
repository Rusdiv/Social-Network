let initialState = {
  dialogData:[
    {id: 1, name: 'Aleksandr'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Boris'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Ruslan'},
    {id: 6, name: 'Sasha'},
  ],

  messagesData:[
    {id: 1, message: 'Hi' ,},
    {id: 2, message: 'Yo', },
    {id: 3, message: 'yo', },
    {id: 4, message: 'What`s is u name?',},
    {id: 5, message: 'My name is Dima',},
    {id: 6, message: 'OMG',},
  ],
  newMessageText: '',
}

export const messagesReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'SEND-MESSAGE':
      let body = state.newMessageText;
      state.newMessageText = '';
      state.messagesData.push({id: 7, message:body})
      return {dialogData: state.dialogData, messagesData: state.messagesData}
    case 'UPDATE-NEW-MESSAGE-BODY':
      state.newMessageText = action.body;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE' })
export const updateNewMessageBodyCreator = (body) => 
  ({type:  'UPDATE-NEW-MESSAGE-BODY', body: body})