import React, { Component } from 'react';
import Store from './data';
class Cart extends Component {
  
    render() {
        console.log(this.state)
        var items = this.props.cartItems.map((item)=>(
            <div className="col-sm-4 zero" >
                <div className="row" style={{ background: "#fff", minHeight: "100px", margin: "20px 10px 0px" }}>

                    <div className="col-xs-3 zero">
                      
                        <img src={`../images/${item.url}`} style={{margin:"10px 0px 0px"}} width="100%" alt="img" />
                        
                    </div>
                    <div className="col-xs-9">
                        <div style={{ margin: "10px 0px 0px"}}>
                        <p style={{margin:"0px"}}><b>{item.title}</b></p>
                        <small>EU12</small>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        
                    </div>
                    
                    <div className="col-xs-12   " style={{ paddingBottom: "10px" }}>
                        <div className="" style={{ width: "80px",marginLeft:"28%", bottom: "0" }} >
                            
                            <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>

                                <i className="fa fa-minus"></i>

                            </button>
                            <input type="text" value="1" className="form-control" style={{ padding: "10px 6px", float: "left", width: "30px", height: "0px", border: "inherit" }} />
                            <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>
                                <i className="fa fa-plus"></i>
                            </button>
                            
                            
                        </div>
                        <span className="pull-right"><b>{item.price}</b></span>  
                    </div>
                    
                </div>
            </div>
        ))
        return (
            <div >
                <div className="row">
                    <div className="col-xs-12 zero">
                        <div style={{ background: "#fff",padding:"20px 0px",borderBottom:"1px solid lightgrey", color:"#000",textAlign:"center" }}>
                            <h3 style={{ margin: "0px", color: "#000",fontWeight:"bold"}}> Shopping Cart </h3>
                            <small> {this.props.cartItems.length} Item (s) </small>
                        </div>
                    </div>
                    <div className="col-sm-9 " >
                        <div className="row" >
                            
                         {items}
                       
                            
                        </div>
                    </div>
                    <div className="col-sm-3 checkout zero" >
                        <div style={{ background: "#fff",padding:"10px 0px", minHeight: "500px"}}>
                           
                            
                            <ul className="list-group" >
                                <li className="list-group-item"  >
                                    <div style={{ borderBottom: "1px solid lightgrey", padding: "10px 0px", color: "#bbb",fontSize:"1.1em" }}><span><b>TOTALS </b></span></div>
                                </li>
                                <li className="list-group-item">
                                    Subtotal <span className="pull-right"> 0000</span>
                                </li>
                                <li className="list-group-item">
                                    Cash On Delivery Fee<span className="pull-right"> 0000</span>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ border: "1px solid lightgrey",borderRight:"none",borderLeft:"none", padding: "10px 0px", fontWeight:"bold" }} > GRAND TOTAL <span className="pull-right"> 0000</span></div>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ padding: "10px 0px", color: "#bbb", fontWeight: "bold" }} ><span> DISCOUNT COUPONS </span></div>
                                    <div> If you have a Coupon/Voucher Enter its value below </div>
                                    
                                        <div className="form-group">
                                            <input type="text" className="form-control" style={{ margin:"10px 0px 30px"}}id="" placeholder="ENTER COUPON CODE" />
                                            <center>
                                            <button type="button" className="btn btn-default" style={{padding:"3px 20px",color:"#aaa",fontSize:"0.8em",borderRadius:"20px"}}>APPLY</button>
                                            </center>
                                        </div>
                                </li>
                                <li className="list-group-item"  >
                                    <div style={{ padding: "10px 0px", color: "#bbb", fontWeight: "bold" }} ><span> ESTIMATE SHIPPING</span></div>
                                    <div> Enter your location to get a shipping location</div>

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

export default Cart;