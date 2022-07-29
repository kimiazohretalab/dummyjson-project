import React from 'react';
import { Link } from 'react-router-dom';
import { Add } from './add';
import './products.css'

export const ProductCard = ({ id, title, description, price, brand, category,rating,images }) => {


  return (
    <div className='users-card'>
      <h3 className='user-title'>
        {title}
      </h3>
      <div className='mid'>
      <img src={images[0]} alt="" style={{width:150,height:100}} />
      <div className='user-text'>ID : {id}</div>
      <div className='user-text'>description : {description}</div>
      <div className='user-text'>price : {price}</div>
      <div className='user-text'>brand : {brand}</div>
      <div className='user-text'>category : {category}</div>
      <div className='user-text'>rating : {rating}</div>
      </div>
      <div className='user-card-footer'>
        <Link to={`products/${id}`}>
          <button className='icon-button'>
            <i>
              Detail
            </i>
          </button>
        </Link>
        <Add props={{ id, title, description, price, brand, category,rating,images }}/>
      </div>
    </div>
  );
};
