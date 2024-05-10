import React, { useContext, useState } from 'react'
import './FabItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

//in this fab item u will get the image,descrip,price of the fab item 
const FabItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className='fab-item'>
      <div className="fab-item-img-container">
        <img className='fab-item-img' src={image} alt="" />
        {
          !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>:
          <div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems
            [id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="fab-item-info">
        <div className="fab-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fab-item-desc">
          {description}
        </p>
        <p className="fab-item-price">{price}</p>
      </div>
    </div>
  )
}

export default FabItem
