import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './component/home.js';
import Listitem from "./component/listitem"
import Category from './component/category'
import Preview from './component/preview';
import Cart from './component/cart';
import Affiliate from './component/affiliate';
import Sellersignup from './component/sellersignup'
class Main extends Component {
    passupdate2(params) {
        this.props.newUpdate(params)
    }
    render() {
        return (
            <div className="">
                    
                        <div className="row" >
                            <div className="col-sm-12 zero " >
                                
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/category" component={Category} />
                                    <Route exact path="/category/:title" render={(props)=>(
                                        <div>
                                            <Listitem {...props} passUpdate2={this.passupdate2.bind(this)}/>
                                        </div>
                                    )}  />
                                    <Route exact path="/category/:title/:id" render={(props) => (
                                        <div>
                                            <Preview {...props} passUpdate2={this.passupdate2.bind(this)} />
                                        </div>
                                    )} />
                                    <Route exact path="/seller" component={Sellersignup} />
                                    <Route exact path="/affiliate" component={Affiliate} />
                                    <Route exact path="/cart" render={(props) => (
                                        <div>
                                            <Cart {...props} passUpdate2={this.passupdate2.bind(this)} {...this.props.state}/>
                                        </div>
                                    )} />
                                    
                                </Switch>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Main;