import React  from 'react';


const Itemcard = ({ url, price, slash, discount, title,match })=>
    {   if(title.length>30)
        {
            var subtitle = title.substr(0, 25);
            subtitle +="..."
        }else subtitle = title
        
        
        return (
          
            <div className="item-card" >
                
                <div style={{"position":"relative",background:"#fff"}}>
                    <div className="discount1" style={{ "position": "absolute",  }}><b>{discount} </b></div>
                    <center>
                    <img src={`../images/${url}`} width="80%" alt={title}/>
                    </center><hr style={{ margin: "5px 0px 20px" }} />
                <div className="anchor"style={{"padding": "0px 10px 10px" }}>
                   <a href={`${match.url}/${title}`} style={{"textDecoration":"none"}}>
                        
                            <b style={{ textTransform: "capitalize", fontSize: "1em"}}> {subtitle}</b>
                        {/* <b>{title}</b> */}
                        <p className="pull-right"> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "3px" }}></i> 2 in stock</p>
                        
                        <p className="slash" style={{margin:"0px",color:"#ccc"}}><b><s>{slash}</s></b></p>
                        <p className="item-price" style={{  }}>{price} </p>
                        <p style={{"margin":"0px"}}>
                        <b>Dolce n Gabbana</b>

                            </p>
                       
                        
                    </a>


                   <button type="button" style={{ background: "#F5611D", color: "#fff", borderRadius: "20px", fontSize: "0.7em",right:"10px", bottom:"15px",   position:"absolute", padding: "4px 15px" }} className="btn ">BUY</button>


                    </div>
                    
                </div>
            </div>
        );
    }


export default Itemcard;