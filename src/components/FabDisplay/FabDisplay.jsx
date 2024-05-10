import React, { useContext } from 'react'
import './FabDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FabItem from '../FabItem/FabItem'

const FabDisplay = ({category}) => {
    const {fab_list}=useContext(StoreContext)
    return (
    <div className='fab-display' id='fab-display'>
      <h2>Our Work</h2>
      <div className="fab-display-list">
        {fab_list.map((item,index)=>{
          {console.log(category,item.category)}
          if(category==="All" || category===item.category){
            return <FabItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }

            
        })}
      </div>
    </div>
  )
}

export default FabDisplay
