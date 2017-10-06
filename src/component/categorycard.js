import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Store from './data'
import Itemcard from './itemcard';


const Categorycard = ({category,banner,products,match})=>{
    var path = (match == undefined) ? 'category':match.url;
    var sub = products.filter((item,index)=>(index < 4))
    console.log(sub)
  
    return(
        <div className="category-group">
            <div className="row" style={{ background: "#fff", margin: "0px 0px 20px" }}>
                
                <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 zero" >
                    <div className="category-list">
                        <ul className="list-group">
                            <li className="list-group-item"><p className="group-title"> {category.name}</p></li>
                            <li className="list-group-item"><Link to={`${path}${category.url}`}>Categories</Link></li>
                            <li className="list-group-item"><Link to="/">Featured</Link></li>
                            <li className="list-group-item"><Link to="/">Promotion</Link></li>
                            <li className="list-group-item"><Link to="/">New Arrivals</Link></li>
                            <li className="list-group-item"><Link to="/"><b> Shop by brands</b></Link></li>
                            <li className="list-group-item"><Link to="/"><b>Shop by sellers</b></Link></li>
                        </ul>

                    </div>
                </div>
                <Link to={`${path}/${category.url}`} >               
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 zero" style={{
                    borderRight: "1px solid #E6E6E6", width: "41.65%"}}>
                    <div className="bg-lg" style={{ height: "400px", overflow: "hidden"}}>
                        <div className="custom-overlay"></div>
                        <img src={`./images/${banner.url}`} width="100%"  alt="Image" />
                        
                    </div>
                </div>
                <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 zero" style={{ width: "20.825%" }}>
                    <div className="bg-sm" style={{ height: "200px" }}>
                        <div className="custom-overlay"></div>
                        <img src={`./images/${sub[0].url}`} width="100%" alt="Image" />
                    </div>
                    <div className="bg-sm" style={{height: "200px" }}>
                        <div className="custom-overlay"></div>
                        <img src={`./images/${sub[1].url}`} width="100%" alt="Image" />
                    </div>
                </div>
                <div className="col-sm-2 col-md-2  col-xs-2 col-lg-2 zero" style={{ width: "20.825%" }}>
                    <div className="bg-sm" style={{ height: "200px" }}>
                        <div className="custom-overlay"></div>
                        <img src={`./images/${sub[2].url}`} width="100%" alt="Image" />
                    </div>
                    <div className="bg-sm" style={{ height: "200px" }}>
                        <div className="custom-overlay"></div>
                        <img src={`./images/${sub[3].url}`} width="100%" alt="Image" />
                    </div>
                </div>
                </Link>
            </div>
            
            <div id="brand-carousel" className="carousel slide" data-ride="carousel" style={{margin:"0px 0px 20px"}}>
                <ol className="carousel-indicators">
                    <li data-target="#brand-carousel" data-slide-to="0" className=""></li>
                    <li data-target="#brand-carousel" data-slide-to="1" className=""></li>
                    <li data-target="#brand-carousel" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item">
                        <div className="clearfix">
                            <ul className="nav navbar-nav">
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="item">
                        <div className="clearfix">
                            <ul className="nav navbar-nav">
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item active">
                        <div className="clearfix">
                            <ul className="nav navbar-nav">
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                                <li >
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Link</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                       </div>
     
            
        </div>
    )
}
export default Categorycard;