import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import dl from './dataPersonal.json';
import PersonalsItem from './PersonalsItem';

class Personals extends Component {
    render() {
        return (
            <div>
                <Breadcrumb />
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center mb-5">MY EXPERIENT WORK AND LIFE</h1>
                        </div>
                        {
                            dl.map((value, key) => {
                                return (
                                    <PersonalsItem key={key} tinId={value.id} tieuDe={value.tieuDe}
                                        trichDan={value.trichDan} noiDung={value.noiDung} anh={value.anh}
                                        diadiem={value.diadiem} link={value.link} bg={value.bg}>
                                    </PersonalsItem>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Personals;