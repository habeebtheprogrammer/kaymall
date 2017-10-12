import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    constructor(){
        super();
        this.state = {
            cart    :[]
        }
    }
   cartWillUpdate(params){

   }
    render() {
        var rand = Math.random() +1 
        console.log(rand)
        var img = window.location.pathname ==='/' && window.innerWidth > 500? 
            <img src="../images/we-are-3-banner-2400x480-2.jpg" width="100%" className="img-responsive" alt=""/>:null;
        var img2 = window.location.pathname !== '/' && window.innerWidth > 500 && window.location.pathname !== '/affiliate'? 
            <img src="../../images/home3_block1_banner-1.png" width="100%" className="img-responsive" alt="" /> : null;
        if(window.location.pathname === '/cart') return null;
        return (
            <div className="header">
                {img}
                {img2}
                <nav className="navbar navbar-custom fixed-bar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            
                           
                            <i className="fa fa-car" ></i>
                            Homemarket
                            
                        </Link>
                    </div>
                
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li className=" hidden-sm"><Link  to="/category">Stores</Link></li>
                        </ul>
                        <ul className="nav navbar-nav middle-grid">
                            <li className=""><Link to="/category">Category</Link></li>
                            <li><Link to="/seller">Become a seller</Link></li>
                            <li className=""><Link to="/affiliate">Affliate</Link></li>
                            <li className=""><Link to="/faq">F.A.Q</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/cart" className="cart-icon">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="addedItems">{this.props.itemsInCart.length}</span>
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
                    </div>
                </nav>

                <div className="input-group" style={{ width: "100%" }}>

                    <input className="form-control search-bar" type="text" name="" placeholder='Search for products, brand and categories' />
                    
            
                </div>
                <div className="hidden-lg hidden-sm hidden-md" style={{ background:"#f16439",color:"#fff",fontSize:"0.9em",padding:"20px 0px 20px 20px"}}>
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
                  <div className="modal fade" id="added-success">
                      <div className="modal-dialog modal-lg" >
                        <div className="modal-content " style={{ boxShadow: "0px 0px" }}>
                              <div className="modal-body">
                                  <div className="row">
                                    <div className="col-xs-1">
                                        <i className="fa fa-check-circle" style={{ fontSize: "1.5em" }}></i>
                                    </div>
                                      <div className="col-xs-10">
                                        <center>
                                            Successfully added item to cart
                                            <div>
                                                <Link className="btn btn-default"  to="/cart" role="button" style={{border:"1px solid #fff"}}>VIEW CART</Link>
                                                <a className="btn btn-default" href="#" data-dismiss="modal" role="button" style={{ border: "1px solid #fff", margin: "10px 10px 10px 0px" }}>CONTINUE SHOPPING</a>
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

export default Header;
