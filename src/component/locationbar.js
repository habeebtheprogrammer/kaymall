import React from 'react';
import { Link } from 'react-router-dom'
const Locationbar =({match})=>{
    var titleparams = match !== undefined ? 
    <li>
        <Link to={match.url}>
                <span style={{ marginRight: "10px", color: "#bbb", fontSize: "0.9em"}}>{match.params.title}</span>
            <i className="fa fa-angle-right"></i>
        </Link>
    </li>: null;
    return (<div style={{ background: "#fff",margin:"0px 0px 20px"}}>
        <div style={{ padding: "0px 25px" }}>
            <ul className="nav navbar-nav">
                <li >
                    <Link to="/" >
                        <span style={{ marginRight: "10px", color: "#bbb", fontSize: "0.9em"}}>Home </span>
                        <i className="fa fa-angle-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/category">
                        <span style={{ marginRight: "10px", color: "#bbb", fontSize: "0.9em" }}>Category</span>
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