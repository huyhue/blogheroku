import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          id: ''
        }
      }
    chuyenDoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        // return
        return str;
    }
    isChange = (event) => { //Lấy giá trị từ form
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        })
      }

    render() {
        return (
            <div>
                <div className="login">
                    <form className="box">
                    {/* <form className="box" action="index.html" method="post"> */}
                        <h1>Login</h1>
                        <input type="text" onChange={(event) => this.isChange(event)} name="username" placeholder="Username" />
                        <input type="password" onChange={(event) => this.isChange(event)} name="password" placeholder="Password" />
                        <Link to={"/login/" + this.chuyenDoiURL(this.state.username) + "." + this.state.password + ".html"}><input type="submit" name defaultValue="Login" /></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;