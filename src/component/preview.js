import React from 'react';
import Store from './data'
import {Link} from 'react-router-dom'
import Locationbar from './locationbar';
import Carousel from './carousel';

const Preview = ({ match,passUpdate2 }) => {
        function passUpdate(){
            passUpdate2(match.params.id)
        }
        for(var i=0;i<Store.items.length; i++)
            {
                var findId = Store.items[i].products.filter((item)=>{
                    return (item.title === match.params.id)});
            if(findId[0] !== undefined)  break;          
            }
         if(findId[0] === undefined) return (<Locationbar match={match} />)
    return (
        <div className="preview">
            <Locationbar match={match} />
            <div className="container" >
                    <div className="row">
                        <div className=" col-sm-9 " style={{marginBottom:"20px"}}>
                            <div className="" style={{ background: "#fff",padding:"4% 0%",marginBottom:"20px" }} >
                             
                             <div className="row">
                                <div className="col-xs-7 full-xs col-sm-7 " style={{ padding: "0% 11%" }}>
                                    <div style={{marginBottom:"5px"}}>
                                        <Carousel img1={findId[0].url} img2={findId[0].url} img3={findId[0].url}/>
                                    </div>
                                 </div>
                                 <div className="col-xs-4 full-xs col-sm-4 ">
                                    <div style={{ padding: "0% 0%" }}>
                                       <i> Sold by </i> 
                                       <i className="fa fa-user"></i>
                                        <span> Omalicha </span>
                                        <p style={{fontSize:"1.7em",marginBottom:"0px", color:"#000"}}>{match.params.id}</p>
                                        <div className="rating" style={{ color: "#faa819",display:"inline",fontSize:"1.3em"}}> 
                                            <span>☆</span>
                                            <span>☆</span>
                                            <span>☆</span>
                                            <span>☆</span>
                                            <span>☆</span>  
                                        </div><small > <b>(0 Review) </b></small>
                                        <div style={{marginBottom:"15px"}}></div>
                                        <p className="text-black" style={{ margin: "0px", color: "#F5611D", "fontSize": "1.3em", "fontWeight": "800" }}>{findId[0].price}</p> 
                                        <p> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "5px" }}></i> 2 in stock</p>
                                        
                                        <div role="tabpanel">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" className="active">
                                                    <a href="#option" aria-controls="option"  data-toggle="tab">OPTION</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#summary" aria-controls="summary" data-toggle="tab">SUMMARY</a>
                                                </li>
                                            </ul>
                                        
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="option">
                                                    
                                                       
                                                        <div className="form-group">
                                                            <p>Male Show Size <span style={{color: "#F5611D"}}>*</span></p>
                                                            <select name="" className="form-control" style={{borderBottom:"1px solid lightgrey"}} >
                                                                <option value="">Choose an option</option>
                                                                <option value="">Choose an option</option>
                                                                <option value="">Choose an option</option>                                                                
                                                            </select>
                                                            
                                                        </div>
                                                        <p><Link to={match.url} style={{ color: "#F5611D", fontWeight: "bold" }}>Size Guide </Link></p>
                                                        <p> Quantity</p>
                                                        <div className="col-xs-12   zero" style={{marginBottom:"10px"}}>
                                                            <div className="" style={{  bottom: "0" }} >

                                                                <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>

                                                                    <i className="fa fa-minus"></i>

                                                                </button>
                                                                <input type="text" value="1" className="form-control" style={{ padding: "10px 6px", float: "left", width: "30px", height: "0px", border: "inherit" }} />
                                                                <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>


                                                            </div>
                                                        </div>
                                                        
                                                        <button type="submit" className="btn btn-default btn-block addToCart" onClick={passUpdate} data-toggle="modal" href='#added-success' style={{marginTop:"10px"}}>BUY</button>
                                                    
                                                    
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
                        <div className="col-sm-3">
                        <div className="" style={{ background: "#fff",padding:"10%" }} >
                            <p>Customer that also bought this</p>
                            <hr />
                            
                            <img src="../../images/demo1_product20_208x208-300x300.jpg" width="100%" alt=""/>
                            <i>Mayscloset</i>
                            <p>Urban circle longsleeve...</p>

                            <p  style={{ margin: "0px", color: "#F5611D", "fontSize": "1.4em", "fontWeight": "800" }}>$2,323 </p>                            
                           
                                <div className="form-group">
                                    <p>Male Show Size <span style={{ color: "#F5611D" }}>*</span></p>
                                    <select name="" className="form-control" style={{ borderBottom: "1px solid lightgrey" }} >
                                        <option value="">Choose an option</option>
                                        <option value="">Choose an option</option>
                                        <option value="">Choose an option</option>
                                    </select>

                                </div>
                                <p><Link to={match.url} style={{ color: "#F5611D", fontWeight: "bold" }}>Size Guide </Link></p>
                                <p> Quantity</p>
                                <div className="col-xs-12   zero" style={{ marginBottom: "10px" }}>
                                    <div className="" style={{ bottom: "0" }} >

                                        <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>

                                            <i className="fa fa-minus"></i>

                                        </button>
                                        <input type="text" value="1" className="form-control" style={{ padding: "10px 6px", float: "left", width: "30px", height: "0px", border: "inherit" }} />
                                        <button type="button" className="btn " style={{ padding: "2px 5px", float: "left", fontSize: "9px" }}>
                                            <i className="fa fa-plus"></i>
                                        </button>


                                    </div>
                                </div>

                                <button className="btn btn-custom btn-block" onClick={passUpdate}  data-toggle="modal" href='#added-success'  style={{ marginTop: "10px" }}>
                                <span>+</span> <i className="fa fa-shopping-cart"></i>
                                </button>
                                <div className="clearfix">
                                </div>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
    );

}

export default Preview;