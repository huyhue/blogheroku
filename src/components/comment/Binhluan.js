import React, { Component } from 'react';
import BinhluanList from './BinhluanList';
import './bluan.css';
import { comment } from '../firebaseConnect';
import { comment1 } from '../firebaseConnect';
import BinhluanList1 from './BinhluanList1';
class Binhluan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            user: '',
            name: ''

        }
    }
    
    isChange = (event) => { //Lấy giá trị từ form
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = (content,user) => {
        if(this.props.name === "personalsdetail"){
            comment.push({ content: content, user:user});
        }
        if(this.props.name === "newsdetail"){
            comment1.push({ content: content, user:user});
        }
    }
    list = () => {
        if(this.props.name === "personalsdetail"){
           return <BinhluanList/>
        }
        if(this.props.name === "newsdetail"){
            return <BinhluanList1/>
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form action="">
                        <div className="form-row">
                            <div className="col-md-5">
                                <div className="form-group">
                                    <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="content" placeholder="Nhập bình luận của bạn"
                                    />
                                </div>
                            </div>
                            <div className="form-group marginR5">
                                <select className="form-control" onChange={(event) => this.isChange(event)} name="user" defaultValue="https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png">
                                    <option value="https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/news/2020/07/32003/facebook-avatar-main_425_735.jpg">Male</option>
                                    <option value="https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png">Female</option>
                                    <option value="https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png">User</option>
                                    <option value="https://cdn1.vectorstock.com/i/1000x1000/11/10/admin-icon-male-person-profile-avatar-with-gear-vector-25811110.jpg">Admin</option>
                                    <option value="https://static.toiimg.com/photo/76729750.cms">Other</option>
                                </select>
                            </div>
                            <div>
                                <button type="reset" onClick={() => this.addData(this.state.content,this.state.user)} className="btn btn-dark">Comment</button>
                            </div>
                            
                        </div>
                    </form>
                    {this.list()}
                    
                </div>
            </div>
        );
    }
}

export default Binhluan;