import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb';
import { semesterDB } from '../firebaseConnect';
import './cau.css';
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
    getQuote = (event) => {
        const random = Math.floor(Math.random() * this.state.dataFirebase.length);
        this.setState({ sentence: this.state.dataFirebase[random].sentence });
        this.setState({ authod: this.state.dataFirebase[random].authod });
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
                    <tbody>
                        <tr>
                            <th>{value.sentence}</th>
                            <th>{value.authod}</th>
                        </tr>
                    </tbody>
                )
            })
        }
    }

    render() {
        return (
            <div className="">
                <Breadcrumb />
                <div className="container mb-5">
                    <div className="col-md-12 m-5">
                        <h1 className="text-center">NHỮNG CÂU TRUYỀN ĐỘNG LỰC SƯU TẦM</h1>
                    </div>
                    {/* {this.getData()} */}
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
                    <div className="daucau">
                        <h2>Quotes by famous people</h2>
                        <button type="button" id="quoteBtn" onClick={(event) => this.getQuote(event)}>Press to display a quote</button>
                        <blockquote>
                            <h2 id="quote">{this.state.sentence}</h2>
                        </blockquote>
                        <h3 id="quoteAuthor">{this.state.authod}</h3>

                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Sentence</th>
                                        <th>Authod</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getData()}
                                </tbody>
                            </table>
                        </div>
                    </div>




                </div>
            </div>
        );
    }
}

export default Cau;