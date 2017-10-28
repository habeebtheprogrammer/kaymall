import React, { Component } from 'react';
import Store from './data'
import Categorycard from './categorycard'
import Locationbar from './locationbar';
import $ from "jquery"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { apiCalls } from "../reducers/reducer"
import { fetchCat } from "../actions/actions";
import Header from "./header";

class Category extends Component {

    componentWillMount() {
        fetch(`/api/categories`).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => (
            this.props.fetchCat(data)
        ));
    }
    componentDidMount() {
        window.scrollTo({ top: 0 })
        
    }
    

    render() {
   
        if (this.props.apiCall.categories) {
            var List = this.props.apiCall.categories.map((item) => {
                 return <Categorycard key={item._id}{...item} />
            })
        }
        return (
            <div>
                <Locationbar match={this.props.match} />
                <div className="container policy" style={{ position: "relative", overflow: "hidden" }}>
                    {List}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        apiCall: state.apiCalls
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCat: fetchCat
    }, dispatch)

}
export default connect(mapStateToProps, matchDispatchToProps)(Category);
