import React from 'react';
import { Link } from 'react-router-dom'
const Locationbar =({match})=>{
console.log(match)
var id = (match.path === "/category/:title/:id") ? 
    <div className="pad" style={{ float: "left" }}>
        <Link to={match.url}>
            <span>{match.params.id}</span>
        </Link>
    </div>:null;
    var titleparams = match !== undefined ? 
        <div className=" pad" style={{float:"left"}}>
            <Link to={`/category/${match.params.title}`}>
                <span >{match.params.title} </span>
            </Link>
        </div>: null;
    return (
        <div className="locationbar" style={{ background: "#fff", borderBottom: "1px solid #eee",fontSize:"0.9em"}}>
        
         <div className="row">
           
                <div className="pad" style={{ float: "left" }} >
                <Link to="/" >
                    <span >Home </span>
                </Link>
            </div>
                <div className="pad" style={{ float: "left" }}>
                <Link to="/category" >
                    <span> Category</span>
                </Link>
            </div>
            {titleparams}
            {id}
        </div>
        {/* <div style={{ padding: "0px 10px" }}>

            <ul className="nav navbar-nav">
                <li >
                    <Link to="/" >
                        <span style={{ marginLeft: "10px", color: "#bbb", fontSize: "0.9em"}}>Home </span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/category">
                        <i className="fa fa-angle-right"></i> 
                        <span style={{ marginLeft: "10px", color: "#bbb", fontSize: "0.9em" }}>Category</span>
                    </Link>
                </li>
                {titleparams}
                {id}
            </ul>
            <div className="clearfix">
            </div>
        </div> */}
            {/* <style >{`
                .locationbar ul li a{ padding-Left:0px}
                
                `}
            </style> */}
    </div>)
}
export default Locationbar;