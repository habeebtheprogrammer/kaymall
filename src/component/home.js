import React, { Component } from 'react';
import Categorycard from './categorycard'
import Store from './data'

class Home extends Component {
 
    render() {
            var List = Store.items.map((item) => {
                return (<Categorycard key={item.id}{...item} />)
            })

        return (
            <div className="">
                
                <div className="container policy">
                    
                    <div className="row " style={{fontSize:"0.8em",color:"#aaa", textAlign:"center"}}>
                        <div className="col-sm-4 zero">
                        
                        <i className="fa fa-ship" style={{marginRight:"5px",color:"#ccc"}}></i>
                        <span> Free Shipping to selected locations.</span>
                        </div>
                        <div className="col-sm-4 zero">
                            <i className="fa fa-car" style={{ marginRight: "5px", color: "#ccc" }}></i>
                          <span> Nationwide Delivery and dispatch</span>
                        </div>
                        <div className="col-sm-4 zero">
                            <i className="fa fa-diamond" style={{ marginRight: "5px", color: "#ccc" }}></i>
                            <span> Receive Gifts when you subscribe.</span>
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