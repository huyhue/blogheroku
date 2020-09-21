import React, { Component } from 'react';
import './signup.css'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }
  isChange = (event) => { //Lấy giá trị từ form
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  validationForm() {
    let returnData = {
      error: false,
      msg: ''
    }
    const { username, email, password, password2 } = this.state
    if (username === "") {
      returnData = {
        error: true,
        msg: 'Username cannot be blank'
      }
    }
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    //Kiểm tra password
    if (password.length < 8 && password2.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự và phải trùng nhau'
      }
    }

    return returnData;
  }
  submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault();

    //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm()

    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    } else {
      alert('Submit form success')
    }
  }



  render() {
    return (
      <div>
        <div className="dangky1">
          <div className="container dangky">
            <div className="header">
              <h2>Create Account</h2>
            </div>
            <form id="form" className="form" onSubmit={e => { this.submitForm(e); }}>
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" onChange={(event) => this.isChange(event)} name="username" placeholder="florinpop17" id="username" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="username">Email</label>
                <input type="email" onChange={(event) => this.isChange(event)} name="email" placeholder="a@florin-pop.com" id="email" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(event) => this.isChange(event)} name="password" placeholder="Password" id="password" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label htmlFor="password2">Password check</label>
                <input type="password" onChange={(event) => this.isChange(event)} name="password2" placeholder="Password two" id="password2" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>Error message</small>
              </div>
              <button type="submit" >Submit</button>
            </form>
          </div>

        </div>

      </div>
    );
  }
}



export default Signup;