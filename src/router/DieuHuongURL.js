import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import News from './../components/News';
import Home from './../components/Home';
import NewsDetail from './../components/NewsDetail';
import Contact from './../components/Contact';
import Personals from '../components/Personals';
import Videos from '../components/Videos';
import lienhe from '../components/lienhe';
import blog from '../components/blog';
import code from '../components/code';
import code2 from '../components/code2';
import code1 from '../components/code1';
import Contact1 from '../components/Contact1';
import PersonalsDetail from '../components/PersonalsDetail';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={code} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/blog" component={blog} />
                <Route exact path="/lienhe" component={lienhe} />
                <Route exact path="/code" component={code} />
                <Route exact path="/code1" component={code1} />
                <Route exact path="/code2" component={code2} />
                <Route exact path="/news" component={News} />
                <Route exact path="/personals" component={Personals} />
                <Route exact path="/personals/:slug.:id.html" component={PersonalsDetail} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/news/:slug.:id.html" component={NewsDetail} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/contact1" component={Contact1} />
            </div>
        );
    }
}

export default DieuHuongURL;