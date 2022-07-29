import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import {removeItemFromCart,deleteWholeProductFromCart} from '../Store/cart-slice'
import { usePrompt } from './confirmation/leave';
import './cartpartcss.css'

export const CartPage = ({products}) => {
  const formIsDirty = true; // Condition to trigger the prompt.
  usePrompt( 'Leave screen?', formIsDirty );
  const { totalQuantity, totalSum } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if(!products || !products.length){
    return <p>Cart is empty</p>
  }

  return (
    <div>
    <div className='design-h'>cart items totally: {totalQuantity}</div>
    <br />
    <div className='design-h'>total price : {totalSum}$</div>
    <br />
    <table className='table'>
        <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>brand</th>
            <th>category</th>
            <th>rating</th>
            <th>Quantity</th>
            <th>total price</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {products.map((product,index) => (<tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.rating}</td>
                <td>{product.quantity}</td>
                <td>{product.totalPrice}</td>
                <td><button className='icon-button'
                onClick={() => dispatch(removeItemFromCart(product))}
                >-</button></td>
                <td><button className='icon-button'
                onClick={() => {
                dispatch(deleteWholeProductFromCart({ itemToDelete: product }))
                }}
                >X</button></td>
            </tr>))}
        </tbody>
    </table>
    <NavLink to='/'><button className='icon-button'>leave</button></NavLink>
    </div>
  )
}
