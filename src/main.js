import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './component/home.js';
import Listitem from "./component/listitem"
import Category from './component/category'
import Preview from './component/preview';
import Cart from './component/cart';
import Affiliate from './component/affiliate';
import Sellersignup from './component/sellersignup'
import login from './component/login'
import error from './component/error'
import { connect} from "react-redux";
import {bindActionCreators} from "redux";
import { FETCH_ALL_CATEGORY, FETCH_ALL_ITEMS } from "./actions/actions"
import { fetchCat } from "./actions/actions";
import $ from "jquery"
class Main extends Component {

    // passupdate2(params) {
    //     this.props.newUpdate(params)
    // }
    componentWillMount(){
        // $.get("http://localhost:3001/categories").then((data)=>{
        //     console.log("success",data)
        //    return this.props.fetchCat(data)

        // }).catch((err)=>(console.log(err)))
    }
    render() {
        return (
            <div className="">
                <div className="row" >
                    <div className="col-sm-12 zero " >
                        <Switch>
                        
                        <Route exact path="/" render={(props) => (
                            <div>
                                <Home {...props} />
                            </div>
                        )} />
                        <Route exact path="/category" render={(props) => (
                            <div>
                                <Category {...props} />
                            </div>
                        )} />
                        <Route exact path="/seller" component={Sellersignup} />
                        <Route exact path="/login" component={login} />
                        <Route exact path="/affiliate" component={Affiliate} />
                        <Route exact path="/category/:title" render={(props) => (
                            <div>
                                <Listitem {...props} />
                            </div>
                        )} />
                        <Route exact path="/category/:title/:id" render={(props) => (
                            <div>
                                <Preview {...props} />
                            </div>
                        )} />
                        <Route exact path="/cart" render={(props) => (
                            <div>
                                <Cart {...props} />
                            </div>
                        )} />
                        {/* <Route exact path="*" component={error} /> */}
                        </Switch>
                      
                            </div>
                        </div>
                </div>
        );
    }
}

export default Main;