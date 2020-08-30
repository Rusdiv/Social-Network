import {LOAD_PHOTOS} from "./actions";

//Состояние state данного редьюсера на момент инициализации
let initialState = {
    photos: [],
    oldSearch: ""
};

//Сам редьюсер. Он будет вызван при отработке любого ActionCreator и в него прийдет объект action,
//В зависимости от того какой тип action пришел мы меняем состояние state
//Никаких других действий здесь не нужно делать, только менять state по параметрам action
const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            return {...state, photos: action.photos, oldSearch: action.searchText};

        default:
            return state;
    }
};
export default photoReducer;
