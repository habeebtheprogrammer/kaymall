import React  from 'react';
import {Link} from 'react-router-dom';


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
                    
                    <img src={`../images/${url}`} width="99%" alt={title}/>
                    
                <div className="anchor"style={{"padding": "0px 10px 10px" }}><hr style={{margin:"5px 0px 20px"}}/>
                   <a href={`${match.url}/${title}`} style={{"textDecoration":"none"}}>
                        
                            <b style={{ textTransform: "capitalize", fontSize: "1em"}}> {subtitle}</b>
                        {/* <b>{title}</b> */}
                        
                        <h4 style={{margin:"0px",color:"#ccc"}}><b><s>{slash}</s></b></h4>
                        <p className="text-black" style={{ margin: "0px", color: "#F5611D", "fontSize": "1.4em", "fontWeight": "bold" }}>{price} </p>
                        <p style={{"margin":"0px"}}>
                        <b>Dolce n Gabbana</b>

                            </p>
                       
                        
                    </a>


                   <button type="button" style={{ background: "#F5611D", color: "#fff", borderRadius: "20px", fontSize: "0.7em",right:"10px", bottom:"15px",   position:"absolute", padding: "4px 15px" }} className="btn  ">BUY</button>


                    </div>
                    
                </div>
            </div>
        );
    }


export default Itemcard;