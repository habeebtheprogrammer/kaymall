import React, { Component } from 'react';
import Store from './data'
import {Link} from 'react-router-dom'
import Locationbar from './locationbar';
import Carousel from './carousel';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {ui} from "../reducers/ui";
import {apiCalls} from "../reducers/reducer"
import $ from "jquery"
import { addToCart } from "../actions/actions";
import { fetchItem } from "../actions/actions"
import {fetchItems} from "../actions/actions"
import { increaseQ,decreaseQ } from "../actions/actions"


function mapStateToProps(state) {
    return {
        apiCalls: state.apiCalls,
        cart : state.cart
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchItem: fetchItem,
        fetchItems: fetchItems,
        addToCart : addToCart,
        increaseQ : increaseQ,
        decreaseQ : decreaseQ
    }, dispatch)

}


class Preview extends Component {

    constructor(){
        super();
        this.state = {
            quantity: null
        }
    }
    componentWillMount() {
        fetch(`/api/items/${this.props.match.params.id}`).then((res) => {
            if (res.ok) {
                return res.json();
            }

        }).then((data) => (
            this.props.fetchItem(data)
        ));
        fetch(`/api/categories/${this.props.match.params.title}`).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => (
            this.props.fetchItems(data)
        ));
    }

    componentDidMount() {

    }

    updateCart() {

        var data = {
            url: this.props.apiCalls.review.image,
            price: this.props.apiCalls.review.price,
            slash: this.props.apiCalls.review.slash,
            discount: this.props.apiCalls.review.discount,
            title: this.props.apiCalls.review.title
        }
        this.props.addToCart(data)

    }

    recent(e){
        console.log(this)
        console.log(e)
    }
    render() {
        console.log(this.props)
        var item = []
        if(this.props.apiCalls.items){
             item = this.props.apiCalls.items.filter((item) => (item.title === this.props.match.params.id))
            var recents = this.props.apiCalls.items.filter((item)=>(item.category === this.props.match.params.title))
        }
        if (item.length)
           {

            var rand = Math.floor(Math.random() * recents.length);
            console.log(rand)
            return (
                <div className="preview">
                    <Locationbar match={this.props.match} />
                    <div className="container" >
                        <div className="row">
                            <div className=" col-sm-9 " style={{ marginBottom: "20px" }}>
                                <div className="" style={{ background: "#fff", padding: "4% 0%", marginBottom: "20px" }} >

                                    <div className="row">
                                        <div className="col-xs-7 full-xs col-sm-7 zoomInDown animated" style={{ padding: "0% 11%" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <Carousel img1={item[0].image} img2={item[0].image} img3={item[0].image} />
                                            </div>
                                        </div>
                                        <div className="col-xs-4 full-xs col-sm-4 " style={{position:"relative",overflow:"hidden"}}>
                                            <div className=" slideInLeft animated" style={{ padding: "0% 0%" }}>
                                                <i> Sold by </i>
                                                <i className="fa fa-user"></i>
                                                <span> Omalicha </span>
                                                <p style={{ fontSize: "1.7em", marginBottom: "0px", color: "#000" }}>{item[0].title}</p>
                                                <div className="rating" style={{ color: "#faa819", display: "inline", fontSize: "1.5em" }}>
                                                    <span>☆</span>
                                                    <span>☆</span>
                                                    <span>☆</span>
                                                    <span>☆</span>
                                                    <span>☆</span>
                                                </div><small > <b>(0 Review) </b></small>
                                                <div style={{ marginBottom: "15px" }}></div>
                                                <p className="text-black" style={{ margin: "0px", color: "#F5611D", "fontSize": "1.3em", "fontWeight": "800" }}>{item[0].price}</p>
                                                <p> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "5px" }}></i>{item[0].stock ? item[0].stock + " in stock" : "Out of stock"}</p>

                                                <div role="tabpanel">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        <li role="presentation" className="active">
                                                            <a href="#option" aria-controls="option" data-toggle="tab">OPTION</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="#summary" aria-controls="summary" data-toggle="tab">SUMMARY</a>
                                                        </li>
                                                    </ul>

                                                    <div className="tab-content" style={{ padding: "10px 0px" }}>
                                                        <div role="tabpanel" className="tab-pane active" id="option">


                                                            <div className="form-group">
                                                                <p style={{ color: "#F5611D", fontWeight: "bold" }}>Size Guide </p>

                                                                <select name="" className="form-control" style={{ borderBottom: "1px solid lightgrey" }} >
                                                                    <option value="">Choose an option</option>
                                                                    <option value="">Choose an option</option>
                                                                    <option value="">Choose an option</option>
                                                                </select>

                                                            </div>


                                                            <button type="submit" className="btn btn-default btn-block " onClick={this.updateCart.bind(this)} data-toggle="modal" href='#added-success' style={{ marginTop: "10px" }}>BUY</button>


                                                        </div>
                                                        <div role="tabpanel" className="tab-pane" id="summary">
                                                            summary not available at the moment please check back later

                                                </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="" style={{ background: "#fff", padding: "4% 5%" }} >

                                    <div className="row">
                                        <div className=" col-sm-6 zero">
                                            <p>Description</p>
                                            <p><b>Features:</b></p>
                                            <p>Easy to clean and polish</p>
                                            <p>comfortable sitting</p>
                                            <p>Features</p>
                                            <p>Easy to clean and polish</p>
                                            <p>comfortable sitting</p>
                                            <p>Features</p>
                                            <p>Easy to clean and polish</p>
                                            <p>comfortable sitting</p>

                                        </div>
                                        <div className=" col-sm-6 zero">


                                            <div className="row disclaimer">

                                                <div className="col-xs-2 zero">
                                                    <i className="fa fa-truck" ></i>
                                                </div>
                                                <div className="col-xs-10 ">
                                                    <span> Products Usually Shipped Out In 1 Day From Ilorin</span>
                                                </div><div className="clearfix"></div>
                                                <div className="col-xs-2 zero">
                                                    <i className="fa fa-phone" ></i>
                                                </div>
                                                <div className="col-xs-10 ">
                                                    <span> Call Us Now for More Info On Our Products</span>
                                                </div><div className="clearfix"></div>
                                                <div className="col-xs-2 zero">
                                                    <i className="fa fa-gift"></i>
                                                </div>
                                                <div className="col-xs-10 ">
                                                    <span> Free Shipping For All Products</span>
                                                </div><div className="clearfix"></div>
                                                <div className="col-xs-2 zero">
                                                    <i className="fa fa-refresh"></i>
                                                </div>
                                                <div className="col-xs-10 ">
                                                    <span> Return Purchase Item</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-sm-3" id="right-grid">
                                <div className="preview-unfixed toggle" style={{ background: "#fff"}}>
                                    <p>Customer that also bought this</p>
                                    <hr />
                                    <img src={`../../images/${recents[rand].image}`} width="100%" alt="" />
                                    <i>Mayscloset</i>
                                    <p>{recents[rand].title}...</p> 

                                    <p style={{ margin: "0px", color: "#F5611D", "fontSize": "1.4em", "fontWeight": "800" }}>${recents[rand].price} </p>
                                    <p> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "5px" }}></i>{recents[rand].stock ? recents[rand].stock + " in stock" : "Out of stock"}</p>
                                    <div className="form-group" style={{ marginTop: "10px" }}>
                                        <p style={{ color: "#F5611D", fontWeight: "bold" }}>Size Guide </p>

                                        <select name="" className="form-control" style={{ borderBottom: "1px solid lightgrey" }} >
                                            <option value="">Choose an option</option>
                                            <option value="">Choose an option</option>
                                            <option value="">Choose an option</option>
                                        </select>

                                    </div>


                                    <button className="btn btn-custom btn-block" onClick={()=>{
                                        var data = {
                                            url: recents[rand].image,
                                            price: recents[rand].price,
                                            slash: recents[rand].slash,
                                            discount: recents[rand].discount,
                                            title: recents[rand].title
                                        }
                                        this.props.addToCart(data)
                                    }} data-toggle="modal" href='#added-success' style={{ marginTop: "10px" }}>
                                        <span>+</span> <i className="fa fa-shopping-cart"></i>
                                    </button>
                                    <div className="clearfix">
                                    </div>
                                </div>
                                
                                <div className="preview-ads row hidden-xs" style={{background:"#fff",marginTop:"20px"}}>
                                    <div className="col-xs-12 " style={{ paddingTop: "10px" }}>
                                       <center> <b > Follow us on</b></center>
                                        <hr style={{margin:"10px "}}/>
                                        <img src="../../images/Women's Shoes.jpg" width="100%" class="img-responsive" alt="Image" />
                                    </div>
                                    
                                    <div className="col-xs-6" style={{padding:"10px 2.5px 10px 10px" }}>
                                        <img src="../../images/1.png" width="100%" class="img-responsive" alt="Image" />
                                        
                                    </div>
                                    <div className="col-xs-6" style={{ padding: "10px 10px 10px 2.5px" }}>
                                        <img src="../../images/2.png" width="100%" class="img-responsive" alt="Image" />

                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );} else return null
     
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Preview)
