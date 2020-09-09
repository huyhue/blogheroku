import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import VideoForm from './VideoForm';
import VideoList from './VideoList';
class Videos extends Component {
  render() {
    return (
      <div>
        <Breadcrumb />
        <div className="container my-5">
          <VideoForm />
          <div className="col-md-12">
            <h1 className="text-center mb-5">NHỮNG TRANG YOUTUBE ĐÁNG HỌC HỎI</h1>
            <h5 className="text-center">Học được cái hay của mỗi người, biết thêm nhiều hơn thông qua phương tiện truyền thông video</h5>
          </div>
          <VideoList />
        </div>
      </div>
    );
  }
}

export default Videos;