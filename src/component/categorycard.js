import React from 'react';
import {Link} from "react-router-dom";



const Categorycard = ({category,banner,products,match})=>{
    var path = (match === undefined) ? 'category':match.url;
    if (category.name.length > 10) {
        var subname = category.name.substr(0, 10);
        subname += "...";
    }
  
    return(
        <div className="category-group">
            <div className="row" style={{ background: "#fff", margin: "0px 0px 20px" }}>
                
                <div className="col-sm-2 hidden-xs zero" >
                    <div className="category-list">
                        <ul className="list-group" style={{marginBottom:"0px"}}>
                            <li className="list-group-item"><p className="group-title"> {subname}</p></li>
                            <li className="list-group-item"><Link to={`${path}${category.url}`}>Categories</Link></li>
                            <li className="list-group-item"><Link to="/">Featured</Link></li>
                            <li className="list-group-item"><Link to="/">Promotion</Link></li>
                            <li className="list-group-item"><Link to="/">New Arrivals</Link></li>
                            <li className="list-group-item hidden-sm"><Link to="/"><b> Shop by brands</b></Link></li>
                            <li className="list-group-item hidden-sm"><Link to="/"><b>Shop by sellers</b></Link></li>
                        </ul>

                    </div>
                </div>
                <Link to={`${path}/${category.url}`} >               
                <div className="  col-sm-5 col-xs-6 zero" >
                    <div className="bg-lg" style={{ overflow: "hidden"}}>
                        <div className="custom-overlay"></div>
                        <p className="show-title" style={{ color: "#fff",fontWeight:"bold",textTransform:"capitalize", padding:"30% 35%",textAlign:"center", position: "absolute", fontSize: "1.4em" }} > {category.name}</p>                        
                        
                        <img src={`./images/${banner.url}`} width="180%"  alt="" />
                        
                    </div>
                </div></Link>
                
                <div  className="col-sm-5 col-xs-6 zero">
                    <Link to={`${path}/${category.url}`} >     
                    <div className="bg-sm " style={{ width:"50%",position:"relative",float:"left" }}>
                        <div className="custom-overlay" ></div>
                        <img src={`./images/${banner.url}`} className="" width="200%" alt="" />
                        <div className="left-cut"></div>
                    </div></Link>
                    <Link to={`${path}/${category.url}`} >     
                    <div className="bg-sm" style={{ width: "50%", float: "left", position: "relative" }}>
                        <p className="hover-title left-cut" style={{}} > {category.name}</p>

                    </div></Link>
                    <Link to={`${path}/${category.url}`} >     
                    <div className="bg-sm" style={{width: "50%", float: "left", position: "relative" }}>
                        <p className="hover-title" style={{}} > {category.name}</p>

                    </div></Link>
                    <Link to={`${path}/${category.url}`} >     
                    <div className="bg-sm" style={{  width: "50%", float: "left", position: "relative" }}>
                        <div className="custom-overlay" ></div>
                        <img src={`./images/${banner.url}`} width="200%" alt="" />
                        <div className="right-cut"></div>
                    </div>
                    </Link>
                    
                    <div className="clearfix"> </div>
                    
                </div>
  
            </div>
            
            <div id="brand-carousel" className="carousel slide " data-ride="carousel" style={{margin:"0px 0px 20px"}}>
              
                <div className="carousel-inner">
                    <div className="item">
                        <div className="clearfix">
                            <ul className="nav navbar-nav navbar-right">
                              
                                <li>
                                    <Link to="/">Adidas</Link>
                                </li>
                                <li>
                                    <Link to="/">Calvin Klein</Link>
                                </li>
                                <li >
                                    <Link to="/">Arrow</Link>
                                </li>
                                <li>
                                    <Link to="/">Puma</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="item">
                        <div className="clearfix">
                            <ul className="nav navbar-nav navbar-right">
                              

                                <li>
                                    <Link to="/">Nike</Link>
                                </li>
                                <li>
                                    <Link to="/">Ralph Lauren</Link>
                                </li>
                                <li >
                                    <Link to="/">Gucci</Link>
                                </li>
                                <li>
                                    <Link to="/">Ionic</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item active">
                        <div className="clearfix">
                            <ul className="nav navbar-nav navbar-right">
                               

                                <li>
                                    <Link to="/">Adidas</Link>
                                </li>
                                <li>
                                    <Link to="/">Calvin Klein</Link>
                                </li>
                                <li >
                                    <Link to="/">Arrow</Link>
                                </li>
                                <li>
                                    <Link to="/">Puma</Link>
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