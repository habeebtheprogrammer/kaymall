import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './component/home.js';
import Listitem from "./component/listitem"
import Category from './component/category'
import Preview from './component/preview';
import Affiliate from './component/affiliate';
import Sellersignup from './component/sellersignup'
class Main extends Component {

    render() {
        return (
            <div className="">
                    
                        <div className="row" >
                            <div className="col-sm-12 zero " >
                                
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/category" component={Category} />
                                    <Route exact path="/category/:title" component={Listitem} />
                                    <Route exact path="/seller" component={Sellersignup} />
                                    <Route exact path="/affiliate" component={Affiliate} />
                                    <Route path="/category/:title/:id" component={Preview} />
                                    
                                    {/* <Route path="*" component={Notfound} /> */}
                                </Switch>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Main;