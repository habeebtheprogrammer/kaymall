import React, { Component } from 'react';

class Sellersignup extends Component {
    render() {
        return (
            <div className="container seller-account">
                
                <div className="row" style={{background:"#fff",padding:"30px 10px", marginTop:"20px"}}>
                    <div className="col-sm-12">
                    <center> <h3> Create a Seller Account</h3> </center>
                    <div style={{ marginBottom: "20px" }}><small >PERSONAL INFORMATION</small>  </div>                      
                    </div>
                    <div className="col-sm-6 ">
                        
                        <form action="" method="POST" >
                            <div className="form-group">
                                <label >First Name <span>*</span></label>
                                <input type="text" className="form-control" id="" placeholder="Input field" />
                            </div>
                            <div className="form-group">
                                <label >Email Address <span>*</span></label>
                                <input type="email" className="form-control" id="" placeholder="Input field" />
                            </div>
                            <div className="form-group">
                                <label >Email Address <span>*</span></label>
                                <input type="email" className="form-control" id="" placeholder="Input field" />
                            </div>
                            <div className="form-group">

                                <select name="" className="form-control" required="required">
                                    <option value="">Please select store category</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6 ">
                        <form action="" method="POST" >
                            <div className="form-group">
                                <label >Last Name <span>*</span></label>
                                <input type="text" className="form-control" id="" placeholder="Input field" />
                            </div>
                            <div className="form-group">
                                <label >Phone number <span>*</span></label>
                                <input type="number" className="form-control" id="" placeholder="Input field" />
                            </div>
                            <label> Business Locatin <span> *</span> </label>
                            <div className="form-group">

                                <select name="" className="form-control" required="required">
                                    <option value="">Please select a state or province</option>
                                </select>
                            </div>
                          
                        </form>

                    </div>
                    <div className="col-sm-12">
                        
                        <div className=" col-sm-6 col-md-6 col-lg-6 zero">
                            <div className="form-group">
                                <input type="checkbox" className="" id="" style={{ marginRight: "5px" }} />
                                <label ><b>Sign up for Newsletter </b></label>
                            </div>
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-6 zero">
                            <div className="form-group">
                                <input type="checkbox" className="" id="" style={{ marginRight: "5px" }} />
                                <label ><b>Accept Terms And Condition </b></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">

                        <a className="btn btn-default btn-block" href="/" >Submit</a>
                        
                    </div>
                    
                </div>
                <style>
                 
                </style>
            </div>
        );
    }
}

export default Sellersignup;