
import React from 'react';

const ItemList = ({itemList=[]}) => {
  return (
    <>
    { itemList.map((data,index) => {
        if (data) {
          return (
            <div key={data[index].name}>
              <h1>{data[index].name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default ItemList;