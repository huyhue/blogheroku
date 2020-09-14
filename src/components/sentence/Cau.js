import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb';
import { semesterDB } from '../firebaseConnect';
class Cau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: '',
            authod: '',
            id: '',
            dataFirebase: []
        }
    }
    componentWillMount() {
        semesterDB.on('value', (notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const sentence = element.val().sentence;
                const authod = element.val().authod;
                arrayData.push({
                    id: key,
                    sentence: sentence,
                    authod: authod
                })
            });
            this.setState({
                dataFirebase: arrayData //đẩy vào state để sử dụng vì arrayData (nó ở bên trong)
            });
        })
    }

    isChange = (event) => { //Lấy giá trị từ form
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = (sentence, authod) => {
        var item = {};
        item.sentence = sentence;
        item.authod = authod;
        semesterDB.push(item);
    }

    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <div className="row">
                        <div className="col-md-8">
                            <h4>{value.sentence}</h4>
                        </div>
                        <div className="col-md-4">
                            <h5>{value.authod}</h5>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <Breadcrumb/>
                <div className="container mb-5">
                    <div className="col-md-12 m-5">
                        <h1 className="text-center">NHỮNG CÂU TRUYỀN ĐỘNG LỰC SƯU TẦM</h1>
                    </div>
                    {this.getData()}
                    <form action="">
                        <div className="form-row mt-3">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label htmlFor="sentence">Good Sentences</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="sentence" id="sentence" placeholder="Câu ấn tượng" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="authod">Authods</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="authod" id="authod" placeholder="Tác giả của nó" />
                                </div>
                            </div>
                            <div>
                                <button type="reset" onClick={() => this.addData(this.state.sentence, this.state.authod)} className="btn btn-secondary mt-3">SHARE</button>
                            </div>
                        </div>
                    </form>             
                        
                </div>
            </div>
        );
    }
}

export default Cau;