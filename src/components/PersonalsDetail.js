import React, { Component } from 'react';
import dl from './dataPersonal.json';
import PersonalsRelated from './PersonalsRelated';
import Breadcrumb from './Breadcrumb';

class PersonalsDetail extends Component {
    render() {
        var dem = 1;
        return (
          <div>
            <div>
                <Breadcrumb/>
            {/* <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center font-weight-light">MY DETAIL NEWS</h1>
                      </div>
                    </div>
                </div> */}
             
              {
                dl.map((value, key) => {
                  if (value.id === parseInt(this.props.match.params.id, 20)) {
                    return (
                      <div className={value.bg + " jumbotron-fluid pb-5"} key={key}>
                        <div className="container">
                        <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center font-weight-light mt-5">MY DETAIL NEWS</h1>
                      </div>
                    </div>
                          <img src={value.anh} className="img-fluid  round chinhanh pt-5"/>
                          <h3 className="lead text-center">{value.tieuDe}</h3>
                          <hr className="my-2" />
                          { value.noiDung }<br/>
                          <p className="card-text text-light float-right">{value.diadiem}</p><br/>
                          <a href={value.link} className="card-link text-dark">Xem thêm...</a>
                        </div>
                      </div>
                    )
                  }
                  else { return true; }
                })
              }
    
              <div className="container">
                <h3 className="card-title text-center m-3">My Retated News</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="card-deck">
                      {
                        dl.map((value, key) => {
                          if (value.id !== parseInt(this.props.match.params.id, 20)) {
                            if (dem <= 3) {
                              dem++;  
                              return (
                                <PersonalsRelated key={key} tinId={value.id} anh={value.anh} tieuDe={value.tieuDe} 
                                trichDan={value.trichDan} bg={value.bg}></PersonalsRelated>
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

export default PersonalsDetail;