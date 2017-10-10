import React from 'react';
import Itemcard from './itemcard';
import Store from './data';
import Locationbar from './locationbar';
const Listitem = ({match})=>{
    var finditem = Store.items.filter((item)=>(match.params.title === item.category.url));
    var items = finditem[0].products.map((item)=>(
        <Itemcard {...item} key={item.id} match={match}/>
    ));
   return (<div>
       <Locationbar match={match} />       
       <div className="container" >     
                    {items}
                    {items}

                <div className="clearfix">
                </div>
        </div>
     
    </div>)
}

export default Listitem;