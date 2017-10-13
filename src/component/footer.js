import React,{Component}  from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container" style={{marginTop:"20px"}}>
                <div className="news-letter" >

                    <div className="row">
                        <div className="col-sm-8">
                            <p className="news-letter-title"> Newsletter Sign Up</p>
                            <p> Enter email address</p>

                            <form action="" method="POST" className="form-inline" style={{ margin: "1% 0px 2%" }} >

                                <div className="form-group  col-sm-9">
                                    <label className="sr-only" >label</label>
                                    <input type="email" className="form-control" id="" style={{width:"100%"}}/>
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="btn btn-custom ">Subscribe</button>
                                </div>
                                
                            </form>
                            <div style={{margin:"30px 0px"}}>Subscribe to receive our latest deals, gifts, and more!</div>

                            </div>

                        <div className=" col-sm-4">
                            <img src="../../images/13259592_1112453678775302_886337791_n.jpg" className="img-responsive" width="33.33%" alt="img" />
                            <img src="../../images/13188071_179262262469766_1360625646_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13183277_104298359987185_2059583378_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13108718_208973229495538_1638819115_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13188151_728427913966056_999471776_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13259545_301677243497535_1189638748_n.jpg" width="33.33%" className="img-responsive" alt="img"/>
                            
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