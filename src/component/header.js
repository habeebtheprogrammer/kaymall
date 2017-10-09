import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        var rand = Math.random() +1 
        console.log(rand)
        var img = window.location.pathname ==='/'? 
            <img src="../images/we-are-3-banner-2400x480-2.jpg" width="100%" className="img-responsive" alt=""/>:null;
        var img2 = window.location.pathname !== '/' ? 
            <img src="../../images/home3_block1_banner-1.png" width="100%" className="img-responsive" alt="" /> : null;
        
        return (
            <div>
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
                            homemarket
                            
                        </Link>
                    </div>
                
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li className=" hidden-sm"><Link  to="/category">Stores</Link></li>
                        </ul>
                        <ul className="nav navbar-nav middle-grid">
                            <li className=""><Link to="/category">Category</Link></li>
                            <li><Link to="/seller">Become a seller</Link></li>
                            <li className=""><Link to="/affliate">Affliate</Link></li>
                            <li className=""><Link to="/faq">F.A.Q</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/" className="cart-icon">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="addedItems">0</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="cart-icon">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>3</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                                    
                                    
                                    Login/Sign up <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/">Action</a></li>
                                    <li><a href="/">Another action</a></li>
                                    <li><a href="/">Something else here</a></li>
                                    <li><a href="/">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="input-group" style={{ width: "100%" }}>

                    <input className="form-control search-bar" type="text" name="" placeholder='Search for products, brand and categories' />
                    
            
                </div>
               
                
            </div>
        );
    }
}

export default Header;