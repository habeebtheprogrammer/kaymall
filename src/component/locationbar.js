import React from 'react';
import { Link } from 'react-router-dom'
const Locationbar =({match})=>{
console.log(match)
var id = (match.path === "/category/:title/:id") ? <li>
    <Link to={match.url}>
        <i className="fa fa-angle-right"></i>

        <span style={{ marginLeft: "10px", color: "#bbb", fontSize: "0.9em" }}>{match.params.id}</span>
    </Link>
</li>:null;
    var titleparams = match !== undefined ? 
    <li>
        <Link to={`/category/${match.params.title}`}>
                <i className="fa fa-angle-right"></i>
        
                <span style={{ marginLeft: "10px", color: "#bbb", fontSize: "0.9em"}}>{match.params.title}</span>
        </Link>
    </li>: null;
    return (<div className="locationbar" style={{ background: "#fff",margin:"0px 0px 20px"}}>
        <div style={{ padding: "0px 10px" }}>
            <ul className="nav navbar-nav">
                <li >
                    <Link to="/" >
                        <span style={{ marginLeft: "15px", color: "#bbb", fontSize: "0.9em"}}>Home </span>
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
        </div>
        <style >{`
            .locationbar ul li a{ padding-Left:0px}
            
            `}
        </style>
    </div>)
}
export default Locationbar;