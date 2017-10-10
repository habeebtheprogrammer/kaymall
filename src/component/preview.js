import React from 'react';
import Store from './data'
import {Link} from 'react-router-dom'
import Locationbar from './locationbar';
import Carousel from './carousel';

const Preview = ({ match }) => {
        var addToCart = (e)=>{
            var node = document.getElementsByClassName('addedItems');
            var num = node[0].innerHTML;
            num= parseInt(num);
            num  += 1;
            node[0].innerHTML = num;
            alert("added successfully");    
        }

        for(var i=0;i<Store.items.length; i++)
        {
            var findId = Store.items[i].products.filter((item)=>{
                return (item.title === match.params.id)});
           if(findId[0] !== undefined)  break;          
                
         }
         if(findId[0] === undefined) return <Locationbar match={match} />
    return (
        <div className="preview">
            <Locationbar match={match} />
            <div className="container" >
                    <div className="row">
                        <div className=" col-sm-9 " style={{marginBottom:"20px"}}>
                            <div className="" style={{ background: "#fff",padding:"4% 0%",marginBottom:"20px" }} >
                             
                             <div className="row">
                                <div className="col-xs-7 full-xs col-sm-7 " style={{ padding: "0% 7%" }}>
                                    <div style={{marginBottom:"5px"}}>
                                        <Carousel img1={findId[0].url} img2={findId[0].url} img3={findId[0].url}/>
                                    </div>
                                 </div>
                                 <div className="col-xs-4 full-xs col-sm-4 ">
                                    <div style={{ padding: "0% 1%" }}>
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
                                        <p className="text-black" style={{ margin: "0px", color: "#F5611D", "fontSize": "1.3em", "fontWeight": "800" }}>{findId[0].price}</p> <s>{findId[0].slash}</s>
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
                                                    
                                                    <form action="" method="POST"  style={{padding:"5px 0px"}}>
                                                       
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
                                                        <div className="input-group">
                                                            <span className="input-group-btn">
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                            </span>
                                                            
                                                            <input type="number" className="form-control"  required="required" />
                                                            
                                                            <span className="input-group-btn">
                                                                <button type="button" className="btn btn-default">
                                                                <i className="fa fa-plus"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                        
                                                        <button type="submit" className="btn btn-custom pull-right" onClick={addToCart} style={{marginTop:"10px"}}>Add to cart</button>
                                                    
                                                    </form>
                                                    
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
                            <div className="" style={{ background: "#fff", padding: "4% 4%",color:"#000" }} >
                                
                                <div className="row">
                                    <div className=" col-sm-6">
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
                                    <div className=" col-sm-6 ">
                                       
                                        
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
                            <form action="" method="POST"  style={{ padding: "5px 0px" }}>

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
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </span>

                                    <input type="number" className="form-control" required="required" />

                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </span>
                                </div>

                                <button type="submit" className="btn btn-custom btn-block" onClick={addToCart} style={{ marginTop: "10px" }}>
                                <span>+</span> <i className="fa fa-shopping-cart"></i>
                                </button>
                                <div className="clearfix">
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
    );

}

export default Preview;