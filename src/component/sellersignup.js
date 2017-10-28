import React, { Component } from 'react';
import $ from "jquery"
class Sellersignup extends Component {
    constructor(){
        super();
        this.state ={
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            address: null,
            location: null,
            Newsletter: false,
            tac: false
        }
    }
    componentDidMount() {
    }

    typing(e){
        console.log(e.target)
        var node = e.target;
        var prev = $(node).prev().children("span");
        if($(node).val() === "") prev.html("*"); else prev.html("");
        console.log(this.state)
        this.setState({
            firstname: this.refs.fname.value,
            lastname: this.refs.lname.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            location: this.refs.location.value,
        })

    }
    submit(){
        console.log(this.state)
        var data= this.state;
        $.post("http://localhost:3001/seller",{...data},function(data) {
            console.log(data);
        })
    }
    render() {
        return (
            <div className="container seller-account" style={{ overflow: "hidden"}}>
                
                <div className="row slideInLeft animated" style={{ background: "#fff", padding: "30px 10px", marginTop: "20px"}}>
                    <div className="col-sm-12">
                    <center> <h3> Create a Seller Account</h3>
                     </center>
                    <div style={{ marginBottom: "20px" }}><small >PERSONAL INFORMATION</small>  </div>                      
                    </div>
                    <div className="col-sm-6 ">
                            <div className="form-group has-feedback">
                                <label >First Name <span>*</span></label>
                                <input ref="fname" onChange={this.typing.bind(this)} type="text" className="form-control" name="firstname" placeholder="Input field" />
                                {this.state.firstname?<span className="form-control-feedback" style={{color:"green"}}>
                                <i className="fa fa-check"></i>
                                </span>:null}
                            </div>
                            <div className="form-group has-feedback">
                                <label >Email Address <span>*</span></label>
                                <input ref="email" type="email" onChange={this.typing.bind(this)}  className="form-control" name="email" id="" placeholder="Input field" />
                                {this.state.email ? <span className="form-control-feedback" style={{ color: "green" }}>
                                    <i className="fa fa-check"></i>
                                </span> : null}
                            </div>
                            <div className="form-group has-feedback">
                                <label > Address <span>*</span></label>
                                <input type="addressl" ref="address" onChange={this.typing.bind(this)}  name="address" className="form-control" id="" placeholder="Input field" />
                                {this.state.address ? <span className="form-control-feedback" style={{ color: "green" }}>
                                    <i className="fa fa-check"></i>
                                </span> : null}
                            </div>
                          
                    </div>
                    <div className="col-sm-6 ">
                        <div className="form-group has-feedback">
                                <label >Last Name <span>*</span></label>
                                <input type="text" ref="lname" onChange={this.typing.bind(this)}  className="form-control" id="" placeholder="Input field" />
                                {this.state.lastname ? <span className="form-control-feedback" style={{ color: "green" }}>
                                    <i className="fa fa-check"></i>
                                </span> : null}
                            </div>
                        <div className="form-group has-feedback">
                                <label >Phone number <span>*</span></label>
                                <input type="number" ref="phone" onChange={this.typing.bind(this)}  className="form-control" id="" placeholder="Input field" />
                                {this.state.phone ? <span className="form-control-feedback" style={{ color: "green" }}>
                                    <i className="fa fa-check"></i>
                                </span> : null}
                            </div>
                            <label> Business Locatin <span> *</span> </label>
                            <div className="form-group">
                            <select name="" className="form-control" required="required" onChange={this.typing.bind(this)} >
                                    <option value="" ref="location">Please select a state or province</option>
                                </select>
                            </div>
                    </div>
                    <div className="col-sm-12">
                        
                        <div className=" col-sm-6 col-md-6 col-lg-6 zero">
                            <div className="form-group">
                                <input  type="checkbox"  className="" id="" style={{ marginRight: "5px" }} />
                                <label ><b>Sign up for Newsletter </b></label>
                            </div>
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-6 zero">
                            <div className="form-group">
                                <input ref="tac"  type="checkbox" className="" id="" style={{ marginRight: "5px" }} />
                                <label ><b>Accept Terms And Condition </b></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button className="btn btn-default btn-block" onClick={this.submit.bind(this)} data-target="#seller" data-toggle="modal">Submit</button>
                    </div>
                </div>
                <div className="modal fade" id="seller" >
                    <div className="modal-dialog " >
                        <div className="modal-content " style={{ boxShadow: "0px 0px" }}>
                            <div className="modal-body">
                                <div className="row">
                                  
                                    
                                    <div className="col-xs-4">
                                        <img src="../../images/avatar5.png" width="100%" class="img-responsive" alt="Image" />
                                        
                                    </div>
                                    <div className="col-xs-8">
                                            <h4>Personal Information </h4>
                                            <hr style={{ margin: "0px" }} />
                                            <p><label className="label">Full Name: {this.state.firstname} {this.state.lastname}</label> <span> </span></p>
                                            <p> <label className="label">Email: {this.state.email}</label> </p>
                                            <p> <label className="label">Phone: {this.state.phone}</label> </p>
                                            <p> <label className="label">Address:  {this.state.address}</label> </p>
                                            <div>
                                                <a className="btn btn-default" href="/login" role="button" style={{ border: "1px solid #fff", margin: "10px 10px 10px 0px" }}>LOGIN</a>
                                                <a className="btn btn-default" href="#" data-dismiss="modal" role="button" style={{ border: "1px solid #fff", margin: "10px 10px 10px 0px" }}>CONTINUE</a>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Sellersignup;