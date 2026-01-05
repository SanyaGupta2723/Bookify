import React from 'react'
import list from '../../public/list.json';

function PopularBook() {
    const filterData = list.filter((data) => data.category === "Free"); 
    console.log(filterData);
  return (
    <div>
      
    </div>
  )
}

export default PopularBook
