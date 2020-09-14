import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div>
            <nav>
                <ol className="breadcrumb pl-5">
                    <li className="breadcrumb-item active">
                        <a href="/personals">Personals</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/News">News</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="/videos">Videos</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="/cau">Sentences</a>
                    </li>
                </ol>
            </nav>
            </div>
        );
    }
}

export default Breadcrumb;