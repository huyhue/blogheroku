import { noteData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log(' Thêm dữ liệu ' + JSON.stringify(action.getItem) + " thành công");
            return state
        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
})
export default store; 