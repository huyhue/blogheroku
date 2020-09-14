import React, { Component } from 'react';
import './bluan.css';
import { comment1 } from '../firebaseConnect';
class BinhluanList1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() { 
        comment1.on('value', (notes) => { //Lấy dữ liệu
            var arrayData = []; //tạo mảng vì firebase kiểu đối tượng
            notes.forEach(element => {
                const content = element.val().content;
                const user = element.val().user;
                arrayData.push({
                    content: content,
                    user: user
                })
            });
            this.setState({
                dataFirebase: arrayData //đẩy vào state để sử dụng vì arrayData (nó ở bên trong)
            });
        })
    }
    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <div className="col-md-6">
                        <img alt="anh" src={value.user} />
                        <p>{value.content}</p>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row cmm mb-5">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default BinhluanList1;