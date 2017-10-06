import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container" style={{marginTop:"20px"}}>
                <div className="news-letter" >

                    <div className="row">
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <p className="news-letter-title"> Newsletter Sign Up</p>
                            <p> Enter email address</p>

                            <form action="" method="POST" className="form-inline" style={{ margin: "1% 0px 2%" }} >

                                <div className="form-group" style={{ width: "40%" }}>
                                    <label className="sr-only" >label</label>
                                    <input type="email" className="form-csontrol" id="" />
                                </div>
                                <button type="submit" className="btn">Subscribe</button>
                            </form>
                            Subscribe to receive our latest deals, gifts, and more!

                            </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>

                    </div>

                </div>
                <div className="chat-box">
                    <ul className="nav navbar-nav fixed-bottom " >
                    
                        <li className="dropdown ">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown">Online 
                                
                                    <i className="fa fa-circle" style={{fontSize:"0.8em",color:"green",marginLeft:"5px"}}></i>
                                    
                                <b className="caret" style={{marginLeft:"20px"}}></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/">Action</a></li>
                                <li><a href="/">Another action</a></li>
                                <li><a href="/">Something else here</a></li>
                                <li><a href="/">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;