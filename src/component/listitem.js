import React, { Component } from 'react';
import Itemcard from './itemcard';
import Store from './data';
import Locationbar from './locationbar';
import $ from "jquery"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { apiCalls } from "../reducers/reducer"
import  ui from "../reducers/ui"
import { fetchItems } from "../actions/actions";
import { addToCart } from "../actions/actions";

function mapStateToProps(state) {
    return {
        apiCalls: state.apiCalls
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchItems: fetchItems,
        addToCart: addToCart
    }, dispatch)

}
class Listitem extends Component {
    
    componentWillMount() {
        fetch(`/api/categories/${this.props.match.params.title}`).then((res) =>  {
            if (res.ok) return res.json()
    }).then((data) => (
            this.props.fetchItems(data)
        ));
    }
  
    componentDidMount() {
        window.scrollTo({top: 0,y:0})
    }
    
    render() {
        var Listitem=[]
        if (this.props.apiCalls.items) {
            var items = this.props.apiCalls.items;
            window.category = this.props.match.params.title;
            window.category = window.category.toLowerCase();
            var List = items.filter((item)=>{
                return (item.category === window.category)
            })
            Listitem = List.map((item) => {
                if (item.category === window.category)
                    return <Itemcard {...item} addToCart={this.props.addToCart} key={item._id} match={this.props.match} />; else return null
            });
          
        }

        return (
            <div>
                <Locationbar match={this.props.match} />
                <div className="container" style={{position:"relative",overflow:"hidden"}} >
                    {Listitem.length ? Listitem:
                    <p className="slideInDown animated">
                        <center>
                            <h3> Store Is Empty</h3>
                            please check back later<br />
                        </center>
                        </p>}
                    <div className="clearfix">
                    </div>
                </div>

            </div>
        );
    }
}

 export default connect(mapStateToProps, matchDispatchToProps)(Listitem);

