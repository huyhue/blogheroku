import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }
//nếu không sửa gì thì cũng phải lấy được dữ liệu cần sửa
  componentWillMount() { //trước khi render
    if (this.props.editItem) {  // edit case ,phải tồn tại
      this.setState({
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent,
        id: this.props.editItem.id
      });
    }
  }

  isChange = (event) => { //Lấy giá trị từ form
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  addData = (title, content) => {
    if (this.state.id) { //edit case 
      var editObject = {}; //gom dữ liệu vào biến editObject
      editObject.id = this.state.id;
      editObject.noteContent = this.state.noteContent;
      editObject.noteTitle = this.state.noteTitle;

      this.props.editDataStore(editObject);
      this.props.changeEditStatus(); // tắt form 
    }
  }

  render() {
    return (
      <div className="col-4">
        <h3 className="text-center">Sửa ghi chú</h3>
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tiêu đề note</label>
            <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
            <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Nội dung note</label>
            <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle"
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
          </div>
          <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
        </form>
      </div>

    );
  }
}
// props.editItem
//nhận được dữ liệu từ form và đặt vào ô trống
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    isEdit: state.isEdit
  }
}
// this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    editDataStore: (getItem) => {
      dispatch({ type: "EDIT", getItem })
    },
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);