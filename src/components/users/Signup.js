import React, { Component } from 'react';
class Signup extends Component {
  
  render() {
    return (
      <div>
        
        <div className="dangky1">
          <div className="container dangky">
            <div className="header">
              <h2>Create Account</h2>
            </div>
            <form id="form" className="form">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="florinpop17" id="username" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="username">Email</label>
                <input type="email" placeholder="a@florin-pop.com" id="email" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="username">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="username">Password check</label>
                <input type="password" placeholder="Password two" id="password2" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <button>Submit</button>
            </form>
          </div>
          
        </div>

      </div>
    );
  }
}



export default Signup;