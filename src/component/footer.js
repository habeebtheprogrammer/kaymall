import React,{Component}  from 'react';
import {connect} from "react-redux";
import { apiCalls } from "../reducers/reducer"
import {withRouter} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { fetchCat,fetchItems } from "../actions/actions";
import $ from "jquery"
function mapStateToProps(state) {
    return {
        apiCalls: state.apiCalls,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCat: fetchCat,
    }, dispatch)

}

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            email: null,
            success:false
        }
    }
    componentWillUpdate(nextProps, nextState) {
        window.scrollTo({ top: 0 })
    }
    
    typing(e){
        var data = e.target.value
        this.setState({email:data});
    }
    submit(e){
        
        e.preventDefault()
        $.post("http://localhost:3001/newsletter",{email:this.state.email},function (data) {
            console.log(data)
           
            if(data.email){
                $(".email").val("")
                this.setState({ email: this.state.email, success: true })
            } 
          }.bind(this))
        
        
    }
    render() {
        console.log(this.state)
        if(window.location.pathname == "/cart") return null;
        return (
            <footer>
            <div className="container" style={{marginTop:"20px"}}>
                    <div className="row hide-sm" style={{ marginBottom: "10px",paddingTop:"10px", background:"#fff" }}>
                        <div className="col-xs-12 zero">
                            <center> <b > Follow us on</b></center>
                            <hr style={{ margin: "10px " }} />
                            <img src="../../images/Women's_Shoes.jpg" width="100%" class="img-responsive" alt="img" />
                        </div>
                        <div className="col-xs-6 zero" style={{ padding: "10px 2.5px 10px 10px" }}>
                            <img src="../../images/1.png" width="100%" class="img-responsive" alt="Image" />

                        </div>
                        <div className="col-xs-6 zero" style={{ padding: "10px 10px 10px 2.5px" }}>
                            <img src="../../images/2.png" width="100%" class="img-responsive" alt="Image" />

                        </div>

                </div>
                <div className="news-letter" >

                    <div className="row">
                        <div className="col-sm-8">
                            <p className="news-letter-title"> Newsletter Sign Up</p>
                            <p> Enter email address</p>

                            <form action="" method="POST" className="form-inline" style={{ margin: "1% 0px 2%" }} >

                                <div className="form-group  col-sm-6">
                                    <label className="sr-only" >label</label>
                                    <input type="email" onChange={this.typing.bind(this)} name="email" className="form-control email" id="" style={{width:"100%"}}/>
                                </div>
                                
                                <div className="form-group ">
                                        <button onClick={this.submit.bind(this)} data-toggle="modal" data-target="#newsletter" className="btn btn-custom ">Subscribe</button>
                                </div>
                              
                                
                            </form>
                            <div style={{margin:"30px 0px"}}>
                                Subscribe to receive our latest deals, gifts, and more!</div>
                            </div>

                        <div className=" col-sm-4">
                            <img src="../../images/13259592_1112453678775302_886337791_n.jpg" className="img-responsive" width="33.33%" alt="img" />
                            <img src="../../images/13188071_179262262469766_1360625646_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13183277_104298359987185_2059583378_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13108718_208973229495538_1638819115_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13188151_728427913966056_999471776_n.jpg" width="33.33%" className="img-responsive" alt="img" />
                            <img src="../../images/13259545_301677243497535_1189638748_n.jpg" width="33.33%" className="img-responsive" alt="img"/>
                            
                        </div>

                    </div>

                </div>
                <div className="chat-box hidden-xs" >
                    <ul className="nav navbar-nav fixed-bottom " >
                    
                        <li className="dropdown ">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown">Online 
                                
                                    <i className="fa fa-circle" style={{fontSize:"0.8em",color:"green",marginLeft:"5px"}}></i>
                                    
                                <b className="caret" style={{marginLeft:"20px"}}></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/">Action</a></li>
                                <li><a href="/">Another action</a></li>
                                <li><a href="/">Something else here</a></li>
                                <li><a href="/">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                   <div className="modal fade" id="newsletter" >
                        <div className="modal-dialog modal-lg" >
                            <div className="modal-content " style={{ boxShadow: "0px 0px" }}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-xs-1">
                                            <i className="fa fa-check-circle" style={{ fontSize: "1.5em" }}></i>
                                        </div>
                                        <div className="col-xs-10">
                                            <center>
                                                {this.state.success ?
                                                    <span> You have Subscribe to our newsletter successfully <i className="fa fa-smile-o"></i>
                                                    </span>
                                                    : <span> Your Subscribtion to our newsletter was not successfully
                                                    </span>
                                                }
                                                 
                                            <div>
                                                    
                                                        <a className="btn btn-default" href="#" data-dismiss="modal" role="button" style={{ border: "1px solid #fff", margin: "10px 10px 10px 0px" }}>CONTINUE</a>
                                                       
                                                </div>
                                            </center>
                                        </div>
                                        <div className="col-xs-1">
                                            <button data-dismiss="modal" className="btn  pull-right" href="#" style={{ padding: "0px", background: "transparent" }}><i className="fa fa-times" style={{ fontSize: "1.5em" }}></i> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      
                
                    
           
            </div>
            <div className="footer" style={{marginTop:"30px"}}>
                <div className="container">
                    <div className="row firstrow">
                        <div className="col-sm-3 zero">
                            <h4>About Us</h4>
                            <div className="grid1">
                                <p>
                                  sit a asperiores maxime est adipisci. Laudantium suscipit quia nobis.lorem
                                  sit a asperiores maxime est adipisci. Laudantium suscipit quia nobis.lorem
                                    sit a asperiores maxime est adipisci. Laudantium suscipit quia nobis.lorem 
                                </p>
                               
                            </div>
                        </div>
                        <div className="col-sm-3 zero ">
                            <div className="grid2">
                                <h4>Information</h4>
                                <ul style={{textTransform:"capitalize"}}>
                                    {this.props.apiCalls.categories ?
                                            this.props.apiCalls.categories.map((item) => (<li><a href={`/category/${item.title}`}> {item.title}</a></li>))
                                    :null}
                                    <li><a href="/account">My Account </a></li>
                                    <li><a href="/help"> Shipping & Returns  </a></li>
                                    <li><a href="/faq">  F.A.Q  </a></li>
                                    <li><a href="/affiliate">  Affiliate </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 zero">
                            <div className="grid3">
                                <h4>Product Tags</h4>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                                <button type="button" className="btn " name="button">phones</button>
                                <button type="button" className="btn" name="button">tv</button>
                                <button type="button" className="btn" name="button">tech</button>
                                <button type="button" className="btn" name="button">cloths</button>
                                <button type="button" className="btn" name="button">kitchen</button>
                            </div>
                        </div>
                        <div className="col-sm-3 zero">
                            <div className="grid4">
                                <h4>CONTACT US</h4>
                                <p>
                                    sit a asperiores maxime est adipisci. Laudantium suscipit quia nobis.lorem
                                </p>
                                <p><i className="fa fa-phone"></i> +234-8181362484</p>
                                <p><a href="github.com/habeebtheprogrammer"><i className="fa fa-envelope"></i> habibmail31@gmail.com </a></p>
                                <p className="icons"> <a href="" className="btn btn-xs"><i className="fa fa-git"></i></a>
                                    <a href="facebook.com/kaystore" className="btn btn-xs"><i className="fa fa-facebook"></i> </a>
                                    <a href="facebook.com/kaystore" className="btn btn-xs"><i className="fa fa-instagram"></i></a>
                                    <a href="twitter.com/kaystore" className="btn btn-xs"> <i className="fa fa-twitter"></i> </a>
                                    <a href="twitter.com/kaystore" className="btn btn-xs"><i className="fa fa-yahoo"></i> </a>
                                    <a href="linkedin.com/kaystore" className="btn btn-xs"><i className="fa fa-linkedin"></i></a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 zero">
                            <span>©2017 KASTORE- inc. All rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="slideInLeft animated" style={{ "position": "fixed", "bottom": "300", "left": "0", }}>

                    <button style={{ "fontSize": "2.3em", "border-radius": "60px", "border": "1px solid #aaa", background:"#f16439" }} className="btn btn-default"><i className="fa fa-music" style={{color:"#fff"}}></i></button>
            </div> */}
            </footer>
        );
    }
}

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Footer))