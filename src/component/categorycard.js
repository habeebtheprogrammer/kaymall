import React from 'react';
import {Link} from "react-router-dom";



const Categorycard = ({title,banner,match})=>{
    var path = (match === undefined) ? 'category':match.url;
    if(title === undefined) return null;
    var subname = title 
    if (title.length > 10) {
        subname = title.substr(0, 10);
        subname += "...";
    } 
    return(
        <div className="category-group">
            <div className="row" style={{ background: "#fff", margin: "0px 0px 20px" }}>
                
                <div className="col-sm-2 hidden-xs zero  slideInLeft animated" >
                    <div className="category-list">
                        <ul className="list-group" style={{marginBottom:"0px"}}>
                            <li className="list-group-item"><p className="group-title"> {subname}</p></li>
                            <li className="list-group-item"><Link to={`${path}${title}`}>Categories</Link></li>
                            <li className="list-group-item"><Link to="/">Featured</Link></li>
                            <li className="list-group-item"><Link to="/">Promotion</Link></li>
                            <li className="list-group-item"><Link to="/">New Arrivals</Link></li>
                            <li className="list-group-item hidden-sm"><Link to="/"><b> Shop by brands</b></Link></li>
                            <li className="list-group-item hidden-sm"><Link to="/"><b>Shop by sellers</b></Link></li>
                        </ul>
                    </div>
                </div>
                          
                <div className="  col-sm-5 col-xs-6 zero" style={{ overflow: "hidden" }}>
                    <div className="bg-lg " >
                        <Link to={`${path}/${title}`} >   
                          
                        <div className="custom-overlay">
                                <p className="show-title" style={{ color: "#fff",position:"absolute", fontWeight: "bold", textTransform: "capitalize",  textAlign: "center", }} > {title} </p>                        
                        </div>
                        
                        <img src={`./images/${banner}`} className="" width="180%"  alt="" />
                        
                        </Link>
                    </div>
                </div>
                
                <div  className="col-sm-5 col-xs-6 zero ">
                   
                    <div className="bg-sm " style={{ width:"50%",position:"relative",float:"left" }}>
                        <Link to={`${path}/${title}`} >     
                        <div className="custom-overlay" ></div>
                        <img src={`./images/${banner}`} className="" width="200%" alt="" />
                        <div className="left-cut"></div>
                        </Link>
                    </div>
                    <div className="bg-sm " style={{ width: "50%", float: "left", position: "relative" }}>
                        
                        <p className="hover-title left-cut" style={{}} > {title}</p>
                    </div>
                    <div className="bg-sm " style={{width: "50%", float: "left", position: "relative" }}>
                       
                        <p className="hover-title" style={{}} > {title}</p>
                    </div>
                    <div className="bg-sm " style={{  width: "50%", float: "left", position: "relative" }}>
                        <Link to={`${path}/${title}`} >     
                        
                        <div className="custom-overlay" ></div>
                        <img src={`./images/${banner}`} width="200%" alt="" />
                        <div className="right-cut"></div>
                        </Link>
                        
                    </div>
                    
                    
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