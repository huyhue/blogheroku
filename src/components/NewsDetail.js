import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated';
import Breadcrumb from './Breadcrumb';
class NewsDetail extends Component {
  render() {
    var dem = 1;
    return (
      <div>
        <div>
          <Breadcrumb/>
        <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-center font-weight-light">MY DETAIL NEWS</h1>
                  </div>
                </div>
              
            </div>
          {/* begin tintuc */}
          {
            dl.map((value, key) => {
              if (value.id === parseInt(this.props.match.params.id, 20)) {
                return (
                  <div className="jumbotron jumbotron-fluid" key={key}>
                    <div className="container">
                      <img src={value.anh} className="img-fluid chinhanh" alt="react router demo" />
                      <h3 className="lead text-center">{value.tieuDe}</h3>
                      <hr className="my-2" />
                      { value.noiDung }
                    </div>
                  </div>
                )
              }
              else { return true; }
            })
          }

          <div className="container">
            <h3 className="card-title text-center">My Retated News</h3>
            <div className="row">
              <div className="col-12">
                <div className="card-deck">
                  {
                    dl.map((value, key) => {
                      if (value.id !== parseInt(this.props.match.params.id, 20)) {
                        if (dem <= 4) {
                          dem++;  //tạo biến đếm để chỉ có 4 tin thôi
                          return (
                            <NewsRelated key={key} tinId={value.id} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}></NewsRelated>
                          )
                        }
                      }
                      return true;
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          {/* end  tintuc */}
        </div>
      </div>
    );
  }
}

export default NewsDetail;