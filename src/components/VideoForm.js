import React, { Component } from 'react';
import { connect } from 'react-redux';
class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      content: '',
      id: ''
    }
  }
  //nếu không sửa gì thì cũng phải lấy được dữ liệu cần sửa
  componentWillMount() { //trước khi render
    if (this.props.editItem) {  // edit case ,phải tồn tại
      this.setState({
        link: this.props.editItem.link,
        content: this.props.editItem.content,
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

  addData = (link, content) => {
      //Tạo mới ghi chú
      var item = {};
      item.link = `https://www.youtube.com/embed/${link}`;
      item.content = content;
      this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
  }

  render() {
    return (
        <form action="">
          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="link">Code Link Youtube</label>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="link" id="link" aria-describedby="helpIdlink" placeholder="Link youtube" />
                <small id="helpIdlink" className="form-text text-muted">https://www.youtube.com/embed/<strong>xxxxxxx</strong></small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="content">Content Youtube</label>
                <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="content"
                />
                <small id="helpIdcontent" className="form-text text-muted">Điền nội dung vào đây</small>
              </div>
            </div>
            <div>
              <button type="reset" onClick={() => this.addData(this.state.link, this.state.content)} className="btn btn-success mt-3 btn-lg">Lưu</button>
            </div>
          </div>
        </form>
    );
  }
}
// props.editItem
//nhận được dữ liệu từ form và đặt vào ô trống
const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);