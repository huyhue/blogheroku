import React, { Component } from 'react';
import dl from './dataUser.json';
class UserDetail extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center font-weight-light">YOUR PAGES</h1>
                        </div>
                    </div>
                </div>
                {
            dl.map((value, key) => {
              if (value.username === this.props.match.params.username && value.password === this.props.match.params.password) {
                return (
                    
                  <div className="jumbotron jumbotron-fluid" key={key}>
                    <div className="container">
                      {/* <img src={value.anh} className="img-fluid chinhanh" alt="react router demo" /> */}
                      <h3 className="lead text-center">ID: {value.id}</h3>
                      <h3 className="lead text-center">{value.username}</h3>
                      <h3 className="lead text-center">Your name: {value.name}</h3>
                      <hr className="my-2" /><strong>Company: </strong>
                      { value.company }<br/>
                      <a href={value.notes} className="btn-block btn-success m-5">My notes</a>
                      <i class="fas fa-h1 ">Some Develop Apps </i>
                      
                    </div>
                  </div>
                  
                )
              }
              else { return true; }
            })
          }
            </div>
        );
    }
}

export default UserDetail;