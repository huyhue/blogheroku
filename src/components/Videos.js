import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class Videos extends Component {
    render() {
        return (
          <div>
          <Breadcrumb/>
            <div className="container my-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center mb-5">NHỮNG TRANG YOUTUBE ĐÁNG HỌC HỎI</h1>
                <h5 className="text-center">Học được cái hay của mỗi người, biết thêm nhiều hơn thông qua phương tiện truyền thông video</h5>
              </div>
              <div className=" col-md-4 card">
                <iframe height={400} src="https://www.youtube.com/embed/-D6siDt_Rhs" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className=" col-md-4 card">
                <iframe height={400} src="https://www.youtube.com/embed/83IdCNSCJmw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className=" col-md-4 card">
                <iframe height={400} src="https://www.youtube.com/embed/tbiLBH04LtE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>{/* end row */}
            <div className="row m-5">
              <div className="col-md-12">
                <h1 className="text-center mb-5">KIẾN THỨC VỀ Y TẾ</h1>
                <h5 className="text-center">Học được cái hay của mỗi người, biết thêm nhiều hơn thông qua phương tiện truyền thông video</h5>
              </div>
              <div className=" col-md-4 card">
                <iframe height={400} src="https://www.youtube.com/embed/SJwWfrWTtkw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>{/* end row */}
            <div className="row m-5">
              <div className="col-md-12">
                <h1 className="text-center mb-5">KIẾN THỨC VỀ KINH TẾ</h1>
                <h5 className="text-center">Học được cái hay của mỗi người, biết thêm nhiều hơn thông qua phương tiện truyền thông video</h5>
              </div>
              <div className=" col-md-4 card">
                <iframe height={400} src="https://www.youtube.com/embed/5f9NIP0aQn8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>{/* end row */}
          </div>
          </div>
        );
    }
}

export default Videos;