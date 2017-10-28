import React, { Component } from 'react';
import Categorycard from './categorycard'
import Store from './data'
import $ from "jquery"
import {apiCalls} from "../reducers/reducer"
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {fetchCat} from "../actions/actions";

function mapStateToProps(state) {
    return {
        apiCalls: state.apiCalls
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCat: fetchCat
    }, dispatch)

}
class Home extends Component {
    componentWillMount() {
        fetch("/api/categories").then((res)=>{
            if(res.ok)
            {
                return res.json();
            }}).then((data)=>(
            this.props.fetchCat(data)
        ));
    }
    


    render() {
        console.log(this.props)
        if (this.props.apiCalls.categories){
            var categories = this.props.apiCalls.categories;
           var List = categories.map((item) =>  
          { return  <Categorycard key={item._id}{...item} />
        })
     }
        

        return (
            <div className="" >
                <div className="container policy" style={{ position: "relative", overflow: "hidden" }}>
                    
                    <div className="row home-policy" style={{fontSize:"0.9em",color:"#aaa", textAlign:"center"}}>
                        <div className="col-sm-4 zero">
                        
                        <i className="fa fa-ship" style={{marginRight:"5px"}}></i>
                        <span> Free Shipping to selected locations.</span>
                        </div>
                        <div className="col-sm-4 zero">
                            <i className="fa fa-car" style={{ marginRight: "5px",  }}></i>
                          <span> Nationwide Delivery and dispatch</span>
                        </div>
                        <div className="col-sm-4 zero">
                            <i className="fa fa-diamond" style={{ marginRight: "5px", }}></i>
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

export default connect(mapStateToProps,matchDispatchToProps)(Home);