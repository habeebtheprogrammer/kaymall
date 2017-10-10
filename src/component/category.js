import React from 'react';
import Store from './data'
import Categorycard from './categorycard'
import Locationbar from './locationbar';

const Category=({match})=> {
        var List = Store.items.map((item) => {
            return (<Categorycard key={item.id} {...item} match={match}/>)})
        return (
            <div>
            <Locationbar match = {match}/>
            <div className="container">
                {List}
            </div>
            </div>
        );
    
}

export default Category;