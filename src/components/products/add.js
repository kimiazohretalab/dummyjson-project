import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/cart-slice';
export const Add = ({props}) => {
    const dispatch = useDispatch();
  return (
    <button className='icon-button' onClick={()=>{
      dispatch(addToCart(props))
    }}>
      Add to Cart
    </button>
  )
}
