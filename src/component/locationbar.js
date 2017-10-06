import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const Locationbar =({match})=>{
    var pathname = window.location.pathname;
    var titleparams = match != undefined ? 
    <li>
        <a href={match.url}>
            <span style={{ marginRight: "10px" }}>{match.params.title}</span>
            <i className="fa fa-angle-right"></i>
        </a>
    </li>: null;
   console.log(match)
    return (<div style={{ background: "#fff",margin:"0px 0px 20px" }}>
        <div style={{ padding: "0px 25px" }}>
            <ul className="nav navbar-nav">
                <li >
                    <Link to="/" >
                        <span style={{ marginRight: "10px" }}>Home </span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/category">
                        <span style={{ marginRight: "10px" }}>Category</span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                </li>
                {titleparams}
            </ul>
            <div className="clearfix">
            </div>
        </div>
    </div>)
}
export default Locationbar;