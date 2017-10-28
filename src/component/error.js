import React, { Component } from 'react';

class error extends Component {
    render() {
        return (
            <div className="zoomInDown animated">
                <center>
                    <h3> This page is not available</h3>
                    please check back later<br />
                    <img src="../../images/empty-cart.png" width="30%" class="img-responsive" alt="cartimg" />

                </center>
            </div>
        );
    }
}

export default error;