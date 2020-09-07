import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            
            <div id="footer">
                <div className="container text-center">
                    <h2>Subcribe To Our Newsletter</h2>
                    <form action>
                    <input type="text" placeholder="Enter Your Email..." required />
                    <button type="submit">SUBCRIBE</button>
                    <small>Copyright @ 2020, Designed by GH PRODUCTION</small>
                    </form>
                </div>
            </div>

        );
    }
}

export default Footer;