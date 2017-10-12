import React  from 'react';


const Itemcard = ({ url, price, slash, discount, title,match,passUpdate })=>
    {   if(title.length>30)
        {
            var subtitle = title.substr(0, 25);
            subtitle +="..."
        }else subtitle = title;
        function updateCart() { 
           var data = {
                url : url,
                price: price,
                slash: slash,
                discount,discount,
                title: title
            }
            passUpdate(data);
         }
        return (
          
            <div className="item-card" >
                
                <div style={{"position":"relative",background:"#fff"}}>
                    <div className="discount1" style={{ "position": "absolute",  }}>{discount} </div>
                    <center>
                    <img src={`../images/${url}`} className="item-img" alt={title}/>
                    </center><hr style={{ margin: "5px 0px 20px",border:"none" }} />
                <div className="anchor"style={{"padding": "0px 10px 10px" }}>
                   <a href={`${match.url}/${title}`} style={{"textDecoration":"none"}}>
                        
                            <p style={{ textTransform: "capitalize", fontSize: "1em"}}> {subtitle}</p>
                        {/* <b>{title}</b> */}
                        <p className="pull-right"> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "3px" }}></i> 2 in stock</p>
                        
                        
                        <p className="slash" style={{margin:"0px",color:"#ccc"}}><s>{slash}</s></p>
                        <p className="item-price" style={{  }}>{price} </p>
                        <p style={{"margin":"0px"}}>
                        Dolce n Gabbana

                            </p>
                       
                        
                    </a>


                   <button type="button" onClick={updateCart}  data-toggle="modal" href='#added-success' style={{ background: "#F5611D", color: "#fff", borderRadius: "20px", fontSize: "0.7em",right:"10px", bottom:"15px",   position:"absolute", padding: "4px 15px" }} className="btn addToCart">Add to Cart</button>


                    </div>

                <div className="clearfix">
                </div>
                </div>
            </div>
        );
    }


export default Itemcard;