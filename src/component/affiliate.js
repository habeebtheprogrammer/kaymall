import React, { Component } from 'react';


class Affiliate extends Component {
    componentWillMount() {
        window.scrollTo({top:0})
    }
    
    render() {
        return (
            <div className="affiliate" >
                
                <div className="row" style={{ background: "url('../../images/hero.jpg')", minHeight: "610px" }}>
                    <div className="col-sm-6 ">
                    </div>
                    <div className="col-sm-6 ">
                        <div style={{marginTop:"25%",color:"#fff"}}>
                        <div className="text-lg"> PROFIT FROM OUR <br />AFFILIATE PROGRAM</div>
                        <div style={{margin:"10px 0px 20px",color:"#eee"}}> Make unbilievable amount of money by join the home market affliate</div>
                        <div> <a className="btn btn-default" href="/" role="button"> 
                        <i className="fa fa-sign-in"></i>
                         <span> SIGN IN </span></a> 
                          <a className="btn btn-default" href="/" role="button">
                                    <i className="fa fa-user"></i>
                                    <span> REGISTER</span></a></div>
                        </div>
                    </div>
                </div>
                <div style={{background:"#222",padding:"100px 0px"}}>
                    <div className="container" >
                        <div className="row">
                            <div className=" col-sm-4 zero" style={{color:"#fff"}}>
                                <span style={{fontSize:"2.4em"}}>Why join our <br/> Affiliate <br />Program?</span>
                            </div>
                            <div className=" col-sm-4 zero text">
                                <p><span>☆ </span> Lorem  consectetur adip elit. ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit. ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit ur adip elit.</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit.ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit.</p>
                            </div>
                            <div className=" col-sm-4 zero text">
                                <p><span>☆ </span> Lorem   consectetur adip elit. ur adip elit  consectetur adip elit. ur adip elit</p>
                               
                                <p><span>☆ </span> Lorem  consectetur adip elit   consectetur adip elit. ur adip elit .ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur   consectetur adip elit. ur adip elit adip elit.</p>
                            </div>
                            <style>
                                {`
                                    .text p span{margin:0px 5px 0px 0px;font-weight:800;font-size:1.3em;}
                                `}
                            </style>
                        </div>
                    </div>
                </div>
                <div >

                    <div className="row">
                        <div className="col-md-10 col-md-offset-1" style={{color:"#222",padding: "5% 0px 5%",marginTop:"40px", background: "#fff" }}>
                            <center><h1> It's easy to become a member...</h1></center>
                            <div className="row">

                                <div className="col-sm-4" style={{ textAlign: "center", margin: "5% 0px", padding: "0px 5%" }}>
                                        <img src="../../images/register.png" width="60%" class="img-responsive" alt="img" />
                                        <p style={{margin:"7% 0px"}}><b>REGISTER</b></p>
                                        <p> It is free to join, simply register and subscribe to our channel </p>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: "center", margin: "5% 0px",padding:"0px 5%" }}>
                                        <img src="../../images/advertise.png" width="60%" class="img-responsive" alt="img" />
                                        <p style={{ margin: "7% 0px" }}><b>ADVERTISEMENT</b></p>
                                        <p>Display our advertisement on your site, blog or social media platform using our REST api builder </p>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: "center", margin: "5% 0px", padding: "0px 5%"  }}>
                                    <img src="../../images/make-money.png" width="60%" class="img-responsive" alt="img" />
                                    <p style={{ margin: "7% 0px" }}><b>MAKE MONEY</b></p>
                                    <p>Receive commission on sales when user clicks on our KAYSTORE adverts</p>
                                </div>
                                
                                <div className="col-xs-12 col-sm-12 ">
                                    <center>
                                    <a className="btn btn-custom" href="/" role="button" style={{ padding: "10px 70px" }}>Join</a>
                                    </center>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                {/* <style>{`
                    .affiliate .text-lg{font-size:2.5em;font-family:verdana;font-weight:bold}
                    .affiliate .text span{margin-right:5px  }
                    .affiliate .btn-default{padding:10px 30px;font-size:0.8em;border:1px solid #eee;background:transparent;color:#fff;border-radius:20px}
                    `}
                </style> */}
            </div>
        );
    }
}

export default Affiliate;