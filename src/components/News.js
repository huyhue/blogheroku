import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';
import Breadcrumb from './Breadcrumb';
class News extends Component {
  render() {
    return (
      <div>
        <div>
          <Breadcrumb/>
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-center m-5 font-weight-bold">MY NEWS</h1>
                  </div>
                </div>
              
            </div>
          {/* begin tintuc */}
          <div className="container">
            <div className="row mt-3">
              {
                dl.map((value, key) => {
                  return (
                    <NewsItem key={key} tinId={value.id} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}> </NewsItem>
                  )
                })
              }
            </div>
          </div>
          {/* end  tintuc */}
        </div>

      </div>
    );
  }
}

export default News; 