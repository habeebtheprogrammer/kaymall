import React, { Component } from 'react';
import {Route,Switch, IndexRoute} from 'react-router-dom';
import Home from './component/home.js';
import Notfound from './component/notfound.js';
import Listitem from "./component/listitem"
import Category from './component/category'
class Main extends Component {

    render() {
        return (
            <div className="">
                    
                    

                        <div className="row" >
                            <div className="col-sm-12 zero " >
                                
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/category" component={Category} />
                                    <Route path="/category/:title" component={Listitem} />
                                    <Route path="/category/:title/:id" component={Listitem} />
                                    {/* <Route path="*" component={Notfound} /> */}
                                </Switch>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Main;