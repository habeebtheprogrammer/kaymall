import React, { Component } from 'react';
import Store from './data'
import Categorycard from './categorycard'
import Locationbar from './locationbar';

const Category=({match})=> {
        var List = Store.items.map((item) => {
            return (<Categorycard {...item} match={match}/>)})
        return (
            <div>
            <Locationbar {...match}/>
            <div className="container">
                {List}
            </div>
            </div>
        );
    
}

export default Category;