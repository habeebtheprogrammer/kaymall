import React,{Component}  from 'react';
import $ from 'jquery'
class Itemcard extends Component {
    componentDidMount() {
        $('.addToCart').on("click", function (e) {
            $(this).html('')
            $(this).append("<i class='fa fa-check'></i>");
            $(this).append(' ADDED');
            this.disabled = true;
            $(this).css({ "background": "#3aba64" })
            $(".cart-icon span").css({ "background": "#3aba64" })
            var discount = $(this).parent().siblings('div');
            $(discount).css({ "background": "#3aba64" })
        })
    
    }
    updateCart() {
    var data = {
        url: this.props.url,
        price: this.props.price,
        slash: this.props.slash,
        discount: this.props.discount,
        title: this.props.title
    }

    this.props.passUpdate(data);


}
    render() {
        if (this.props.title.length > 30) {
            var subtitle = this.props.title.substr(0, 25);
            subtitle += "..."
        } else subtitle = this.props.title;
        console.log(this.props)
        
        
        return (
            <div className="item-card" >

                <div style={{ "position": "relative", background: "#fff" }}>
                    <div className="discount1" style={{ "position": "absolute", }}>{this.props.discount} </div>
                    <center>
                        <img src={`../images/${this.props.url}`} className="item-img" alt={this.props.title} />
                    </center>
                    <div className="anchor" style={{ "padding": "10px 10px 10px" }}>
                        <a href={`${this.props.match.url}/${this.props.title}`} className="title" style={{ "textDecoration": "none" }}>

                            <span style={{ textTransform: "capitalize", fontSize: "1.1em" }}> {subtitle}</span>
                            {/* <b>{title}</b> */}


                        </a>

                        <div className="clearfix">

                        </div>

                        <p className="pull-right "> <i className="fa fa-circle" style={{ fontSize: "0.6em", color: "green", marginRight: "3px" }}></i> 2 in stock</p>


                        <p className="slash" style={{ margin: "0px",fontSize:"1.2em", color: "#ccc" }}><s><b>{this.props.slash}</b></s></p>
                        <p className="item-price" style={{}}>{this.props.price} </p>
                        <p style={{ "margin": "0px",fontSize:"1.1em" }}>
                            Dolce n Gabbana

                            </p>



                        <button type="button" onClick={this.updateCart.bind(this)} style={{ background: "#F5611D", color: "#fff", borderRadius: "20px", right: "10px", bottom: "15px", position: "absolute", padding: "4px 15px" }} id="addToCart" className="btn addToCart hidden-xs">Add to Cart</button>
                        <a href={`${this.props.match.url}/${this.props.title}`}  style={{ background: "#F5611D", color: "#fff", borderRadius: "20px", right: "10px", bottom: "15px", position: "absolute", padding: "4px 15px" }}  className="btn ">BUY</a>


                    </div>

                    <div className="clearfix">
                    </div>
                </div>
            </div>
        );
    }
}

export default Itemcard;
