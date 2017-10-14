import React,{Component}  from 'react';

class Footer extends Component {
    render() {
        if(window.location.pathname == "/cart") return null;
        return (
            <footer>
            <div className="container" style={{marginTop:"20px"}}>
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
                <div className="chat-box hidden-xs" >
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

      
                        
                    
            </div>
            <div className="footer" style={{marginTop:"30px"}}>
                <div className="container">
                    <div className="row firstrow">
                        <div className="col-sm-3 zero">
                            <h4>About Us</h4>
                            <div className="grid1">
                                <p>
                                  sit a asperiores maxime est adipisci. Laudantium suscipit quia nobis.lorem

                                </p>
                                <p><i className="fa fa-phone"></i> +234-8181362484</p>
                                <p><a href=""><i className="fa fa-envelope"></i> habibmail31@gmail.com </a></p>
                                <p className="icons"> <a href="" className="btn btn-xs"><i className="fa fa-git"></i></a>
                                    <a href="" className="btn btn-xs"><i className="fa fa-facebook"></i> </a>
                                    <a href="" className="btn btn-xs"><i className="fa fa-instagram"></i></a>
                                    <a href="" className="btn btn-xs"> <i className="fa fa-twitter"></i> </a>
                                    <a href="" className="btn btn-xs"><i className="fa fa-yahoo"></i> </a>
                                    <a href="" className="btn btn-xs"><i className="fa fa-linkedin"></i></a> </p>

                            </div>
                        </div>
                        <div className="col-sm-3 zero ">
                            <div className="grid2">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="#">  About Us </a></li>
                                    <li><a href="#">My Account </a></li>
                                    <li><a href="#"> Shipping & Returns  </a></li>
                                    <li><a href="#"> Order History  </a></li>
                                    <li><a href="#">  Help & F.A.Q  </a></li>
                                    <li><a href="#">  Conditions  </a></li>
                                    <li><a href="#"> Contact Us  </a></li>
                                    <li><a href="#">  Manufacturers  </a></li>
                                    <li><a href="#">  Online Supports  </a></li>
                                    <li><a href="#">  privacy </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 zero">
                            <div className="grid3">
                                <h4>Product Tags</h4>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                            </div>
                        </div>
                        <div className="col-sm-3 zero">
                            <div className="grid4">
                                <h4>Recent Post</h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipiscing elitos.X
                            <br />by <a href="#">Habeeb</a> </p>
                                <p> Lorem ipsum dolor sit amet consectetur adipiscing elitos.X
                            <br />by <a href="#">Habeeb</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 zero">
                            <span>©2017 KASTORE- inc. All rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        );
    }
}

export default Footer;