import React, { Component } from 'react';

class Affiliate extends Component {
    render() {
        return (
            <div className="affiliate" >
                
                <div className="row" style={{ background: "url('../../images/hero.jpg')", minHeight: "550px" }}>
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
                <div style={{background:"#222",padding:"50px 0px"}}>
                    <div className="container" >
                        <div className="row">
                            <div className=" col-sm-4" style={{color:"#fff"}}>
                                <h1>Why join our <br/> Affiliate <br />Program?</h1>
                            </div>
                            <div className=" col-sm-4 text">
                                <p><span>☆ </span> Lorem  consectetur adip elit. ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit. ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit ur adip elit.</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit.ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur adip elit.</p>
                            </div>
                            <div className=" col-sm-4 text"><b>
                                <p><span>☆ </span> Lorem   consectetur adip elit. ur adip elit  consectetur adip elit. ur adip elit</p>
                               
                                <p><span>☆ </span> Lorem  consectetur adip elit   consectetur adip elit. ur adip elit .ur adip elit</p>
                                <p><span>☆ </span> Lorem  consectetur   consectetur adip elit. ur adip elit adip elit.</p>
                            </b>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{padding:"5% 0px 5%",background:"#fff"}}>
                <center><a className="btn btn-custom" href="/" role="button" style={{padding:"10px 70px"}}>Join</a> </center>
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