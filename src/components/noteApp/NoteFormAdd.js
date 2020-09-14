import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteFormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }
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
    var item = {};
    item.noteTitle = title;
    item.noteContent = content;
    this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
    this.props.alertOn("Thêm mới thành công", "success");
  }

  render() {
    return (
      <form action="">
        <div className="form-row">
          <div className="col-md-4">
            <div className="form-group">
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" placeholder="Tiêu đề note" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" placeholder="Điền nội dung vào đây"
              />
            </div>
          </div>
          <div>
            <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-danger mt-3 btn-lg">Thêm mới</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    isAdd: state.isAdd,
    isEdit: state.isEdit
  }
}
// this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormAdd);