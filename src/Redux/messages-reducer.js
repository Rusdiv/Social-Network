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
}

export const messagesReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'SEND-MESSAGE': {
      let body = action.newMwssageBody;
      return {...state, 
        messagesData: [...state.messagesData, {id: 7, message:body}]}
    }
    default:
      return state;
  }
}

export const sendMessageCreator = (newMwssageBody) => ({type: 'SEND-MESSAGE', newMwssageBody })