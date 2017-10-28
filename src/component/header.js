import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

class Header extends Component {
    componentWillUpdate(nextProps, nextState) {
        window.scrollTo({ top: 0 })
    }
    
    render() {
        var rand = Math.random() +1 
        var img = window.location.pathname ==='/' && window.innerWidth > 500? 
            <img src="../images/we-are-3-banner-2400x480-2.jpg" width="100%" className="img-responsive" alt=""/>:null;
        var img2 = window.location.pathname !== '/' && window.innerWidth > 500 && window.location.pathname !== '/affiliate'? 
            <img src="../../images/female_shoes_large_banner_800x4501.jpg" width="100%" className="img-responsive" alt="" /> : null;
        if(window.location.pathname === '/cart') return null;
        var hide = window.location.pathname === '/affiliate' ?
          "hide" : null;
        return (
            <div className="header">
                {img}
                <nav className="navbar navbar-custom fixed-bar ">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <center><span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" style={{ width: "7px"}}></span>
                            <span className="icon-bar" style={{ width: "11px" }}></span>
                            <span className="icon-bar" style={{ width: "7px" }}></span></center>
                        </button>
                        <Link to="/cart" className="cart-icon pull-right hide-sm" style={{margin:"11px 4px 0px"}}>
                            <i className="fa fa-shopping-cart" style={{ color:"#aaa"}}></i>
                            <span className="addedItems">{this.props.cart.itemsInCart.length}</span>
                        </Link>
                        <Link to="/login" className=" pull-right hide-sm" style={{ margin:"11px 4px 0px"}}>
                            <i className="fa fa-user" style={{ color: "#aaa" }}></i>
                        </Link>
                        <Link className="navbar-brand" to="/">
                            <img src="../../images/kaystore.png" width="110%"class="img-responsive" alt="logo"/>
                        </Link>
                    </div>
 
                    <div className="collapse navbar-collapse navbar-ex1-collapse ">
                        <ul className="nav navbar-nav hidden-xs">
                            <li className=" hidden-sm"><Link  to="/category">Stores</Link></li>
                        </ul>
                        <ul className="nav navbar-nav middle-grid hidden-xs">
                            <li className=""><Link to="/category">Category</Link></li>
                            <li><Link to="/seller">Become a seller</Link></li>
                            <li className=""><Link to="/affiliate">Affliate</Link></li>
                            <li className=""><Link to="/faq">F.A.Q</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right hidden-xs">
                            <li>
                                <Link to="/cart" className="cart-icon">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="addedItems">{this.props.cart.itemsInCart.length}</span>
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="/cart" className="cart-icon">
                                  <i className="fa fa-money"></i>
                                    <span>0</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/login">
                                    Login/Sign up</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav hide-sm" >
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/store">Stores</a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/category">category</a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/seller">seller</a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/login">Login</a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/cart">cart 
                               </a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/affiliate">Affliate</a></li>
                            <li className=" hidden-sm" style={{ float: "left" }}><a href="/faq">F.A.Q</a></li>
                        </ul>
                    </div>
                </nav>
            
                <div className={`input-group hidden-xs ${hide}`} style={{ width: "100%" }}>

                    <input className="form-control search-bar" type="text" name="" placeholder='Search for products, brand and categories' />
                    <div className="input-group-addon" style={{ background: "#fff", borderTop: "0px", borderRight: "0px", borderBottom:"1px solid #E9E9E9"}}  >
                    <i className="fa fa-search"></i>
                    </div>
                    
            
                </div>
                

                <div className={`hidden-lg hidden-sm hidden-md ${hide}`} style={{ background:"linear-gradient(to right,#f93b60,#fc9721)",color:"#fff",fontSize:"1em",padding:"20px 0px 20px 20px"}}>
                    <div className="row">
                        <div className="col-xs-8 ">
                            <span>Home market store find it for free on Google Play</span>
                        </div>
                        <div className="col-xs-4 ">
                            <a className="btn btn-default " style={{ fontSize: "0.9em",background:"transparent",border:"2px solid #fff",borderRadius:"0px",padding:"5px 15px",color:"#fff"}}href="/" role="button">
                                <span> GET</span></a>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="added-success" >
                    <div className="modal-dialog modal-lg" >
                        <div className="modal-content " style={{ boxShadow: "0px 0px" }}>
                              <div className="modal-body">
                                  <div className="row">
                                    <div className="col-xs-1">
                                        <i className="fa fa-check-circle" style={{ fontSize: "1.5em" }}></i>
                                    </div>
                                      <div className="col-xs-10">
                                        <center>
                                            Successfully added item to cart <span>
                                                <i className="fa fa-smile-o"></i>
                                            </span>
                                            <div>
                                                <Link className="btn btn-default"  to="/cart" role="button" style={{border:"1px solid #fff"}}>VIEW CART</Link>
                                                <a className="btn btn-default" href="#" data-dismiss="modal" role="button" style={{ border: "1px solid #fff", margin: "10px 10px 10px 0px" }}>CONTINUE</a>
                                            </div>
                                        </center>
                                      </div>
                                      <div className="col-xs-1">
                                        <button data-dismiss="modal" className="btn  pull-right" href="#" style={{padding:"0px", background:"transparent"}}><i className="fa fa-times" style={{fontSize:"1.5em"}}></i> </button>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                  
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Header));
