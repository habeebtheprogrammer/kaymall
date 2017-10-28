import React, { Component } from 'react';
import Store from './data';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import cart  from "../reducers/cart"
import $ from "jquery"
import { fetchItem } from "../actions/actions"
import { increaseQ, decreaseQ } from "../actions/actions"

function mapStateToProps(state) {
    return {
        cart : state.cart
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchItem: fetchItem,
        increaseQ: increaseQ,
        decreaseQ: decreaseQ
    }, dispatch)

}

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 0
        }
    }
    componentDidMount() {
        window.scrollTo({ top: 0 })

    }
    
    render() {
        var total = 0;
        console.log(this.props)
        if(this.props.cart.itemsInCart.length >0)
        {
            
            var items = this.props.cart.itemsInCart.map((item)=>{
                total += item.price;
           return <div className="col-sm-4 zero slideInDown animated" style={{padding:"5px"}}>
                    <div className="row" style={{ background: "#fff", padding:"10px 0px"}}>

                    <div className="col-xs-3 zero" style={{padding:"0px 10px"}}>
                      
                        <img src={`../images/${item.url}`} width="100%" alt="img" style={{marginTop:"10px",}}/>
                        
                    </div>
                    <div className="col-xs-7">
                        <div style={{ }}>
                        <p style={{margin:"0px"}}><b>{item.title}</b></p>
                        <small>EU12</small>
                        </div>
                    </div>
                    <div className="col-xs-2">
                       <div className="flex-box"  >

                           <button type="button" onClick={() => (this.props.increaseQ(item))} className="btn ">
                               <i className="fa fa-plus"></i>
                           </button>


                       </div>
                    </div>
                    
                    <div className="col-xs-12   " >
                        
                       <span className="pull-right"><b>${item.price}</b></span>  
                    </div>
                    
                </div>
            </div>
            });
    } 
        else items= null
        return (
            <div >
                <div className="row">
                    
                    <div className="col-xs-12" style={{ background: "#fff", padding: "20px 10px", borderBottom: "1px solid lightgrey", color: "#000", textAlign: "center" }}>
                            
                            <button onClick={this.props.history.goBack}className=" pull-left btn btn-success" role="button" style={{borderRadius:"100%"}}>
                            <i className="fa fa-chevron-left"></i>
                            </button>
                            
                            <span style={{ margin: "0px",fontSize:"1.6em", color: "#000",fontWeight:"bold"}}> Shopping Cart </span>
                            <br/><small> {this.props.cart.itemsInCart.length} Item (s) </small>
                    </div>
                    <div className="col-xs-12 col-sm-9 zero" >
                        <div className="row" style={{ position: "relative", overflow: "hidden" }}>
                            
                         {items}
                         {this.props.cart.itemsInCart.length === 0 ? <p className="slideInDown animated">
                                <center> <h3> Cart Is Empty</h3>
                                    please check back later<br />
                                 
                                 </center>
                             </p>
                         :null}
                            
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 checkout zero" >
                        <div style={{ background: "#fff",padding:"10px 0px", minHeight: "500px"}}>
                           
                            
                            <ul className="list-group" >
                                <li className="list-group-item"  >
                                    <div style={{ borderBottom: "1px solid lightgrey", padding: "10px 0px", color: "#bbb",fontSize:"1.1em" }}><span><b>TOTALS </b></span></div>
                                </li>
                                <li className="list-group-item">
                                    <b>Subtotal</b> <span className="pull-right">${total}.00</span>
                                </li>
                                <li className="list-group-item">
                                   <b> Cash On Delivery Fee</b><span className="pull-right">$100.00</span>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ border: "1px solid lightgrey",borderRight:"none",borderLeft:"none", padding: "10px 0px", fontWeight:"bold" }} > GRAND TOTAL <span className="pull-right"> ${total+100}.00</span></div>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ padding: "10px 0px", color: "#bbb", fontWeight: "bold" }} ><span> DISCOUNT COUPONS </span></div>
                                    <div><b> If you have a Coupon/Voucher Enter its value below </b></div>
                                    
                                        <div className="form-group">
                                            <input type="text" className="form-control" style={{ margin:"10px 0px 30px"}}id="" placeholder="ENTER COUPON CODE" />
                                            <center>
                                            <button type="button" className="btn btn-default" style={{padding:"3px 20px",color:"#aaa",fontSize:"0.8em",borderRadius:"20px"}}>APPLY</button>
                                            </center>
                                        </div>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ padding: "10px 0px", color: "#bbb", fontWeight: "bold" }} ><span> ESTIMATE SHIPPING</span></div>
                                    <div><b> Enter your location to get a shipping location </b></div>

                                </li>
                                <li className="list-group-item"  >
                                    <div>Country *</div>

                                    <div className="form-group">
                                        <input type="text" className="form-control"  id="" placeholder="ENTER COUPON CODE" />
                                       
                                    </div>
                                </li>
                                <li className="list-group-item"  >
                                    <div> Zip/Postal code</div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="ENTER COUPON CODE" />
                                    </div>
                                </li>
                                <li className="list-group-item"  >

                                    <div className="form-group">
                                        <button type="button" className="btn btn-default btn-block" style={{ padding: "4px 20px", color: "#aaa", fontSize: "0.8em", borderRadius: "20px" }}> 
                                        <i className="fa fa-money"></i> 
                                        <span> CHECKOUT</span></button>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <style>
                    {`
                        .list-group-item{
                            border: 0px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Cart);