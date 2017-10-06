import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Categorycard from './categorycard'
import Store from './data'
class Home extends Component {
 
    render() {
            var List = Store.items.map((item) => {
                return (<Categorycard {...item} />)
            })

        return (
            <div className="">
         
                
                <div className="container">
                    
                    <div className="row" style={{margin:"20px 0px 20px",fontSize:"0.9em",color:"#aaa"}}>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                        
                        <i className="fa fa-ship" style={{marginRight:"5%"}}></i>
                        Free Shipping to selected locations.
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <i className="fa fa-car" style={{ marginRight: "5%" }}></i>
                            Nationwide Delivery and same day dispatch.
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="">
                            <i className="fa fa-diamond" style={{ marginRight: "5%" }}></i>
                            Receive Gifts when you subscribe.
                            </div>
                        </div>

                    </div>
                    {/* <div className="row" style={{ background: "#fff",margin:"0px 0px 20px" }}>
                        <div className="col-sm-2 col-md-1 col-lg-1" >
                            <div className="home-icon"> h<span>s</span></div>
                        </div>
                        <div className="col-sm-4 col-md-5 col-lg-5" style={{
                            borderRight: "1px solid #E6E6E6"
                        }}>
                            <div className="store-category">
                                <p className="cat-title"> Food Store</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae deleniti voluptas laboriosam quos quas. Amet unde molestiae, eius assumenda suscipit explicabo quisquam ut eligendi, officia labore cupiditate libero commodi.
                              
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-1 col-lg-1">
                            <p className="home-icon"> f<span>s</span></p>
                        </div>
                        <div className="col-sm-4 col-md-5 col-lg-5">
                            <div className="store-category">
                                <p className="cat-title"> Food Store</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae deleniti voluptas laboriosam quos quas. Amet unde molestiae, eius assumenda suscipit explicabo quisquam ut eligendi, officia labore cupiditate libero commodi.

                            </div>
                        </div>
                    </div> */}
                {List}
           
                
        </div>
                
    </div>
        );
    }
}

export default Home;