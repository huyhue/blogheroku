import React, { Component } from 'react';
import { noteData } from './firebaseConnect';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    }
  }

  componentWillMount() {  //trước khi render hiển thị ra dữ liệu
    noteData.on('value', (notes) => { //Lấy dữ liệu
      var arrayData = []; //tạo mảng vì firebase kiểu đối tượng
      notes.forEach(element => {
        const key = element.key;
        const link = element.val().link;
        const content = element.val().content;
        arrayData.push({
          id: key,
          link: link,
          content: content
        })
      });
      this.setState({
        dataFirebase: arrayData //đẩy vào state để sử dụng vì arrayData (nó ở bên trong)
      });
    })
  }

  getData = () => {
    if (this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <div className="col-md-4 my-4 card">
          <iframe height={400} src = {value.link} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          {value.content}
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="row">
         {this.getData()}
      </div>
    );
  }
}

export default VideoList;