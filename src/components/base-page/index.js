import React from 'react';
import Helmet from 'helmet';
import './base-page.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const BasePage = ({ title, description, children }) => {
  const count = useSelector((state) => state.cart.cartItems.length)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2 className='page-title'>
        <span>{title}</span>
      </h2>
      <ul>
        <li>
          <NavLink to='/'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='cart'>
          <img src="/shopping.svg" alt="shopping bag" width={20} />
          <span className='badge'>{count}</span>
          </NavLink>
        </li>
      </ul>
      {children}
    </>
  );
};
