import { noteData1 } from '../firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit: false,  //ban đầu không hiển thị form
    editItem: {},
    isAdd: false,
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData1.push(action.getItem);
            console.log(' Thêm dữ liệu ' + JSON.stringify(action.getItem) + " thành công");
            return state

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject } //nhận được item, đẩy vào trong form
        case "EDIT":
            // update dữ liệu lên firebase 
            noteData1.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log("Đã cập nhật dữ liệu " + JSON.stringify(action.getItem) + "thành công ");
            return { ...state, editItem: {} }  //edit xong thì trả về trống
        case "DELETE":
            noteData1.child(action.deleteId).remove();
            console.log("Đã xóa phần tử có id là: " + action.deleteId);
            return state
        default:
            return state
    }
}
var store1 = redux.createStore(allReducer);
store1.subscribe(function () {
    console.log(JSON.stringify(store1.getState()));
})
export default store1; 