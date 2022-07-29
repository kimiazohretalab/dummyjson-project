import React from 'react';
import { useSelector } from 'react-redux';
import { withLoading } from '../../HOC';
import { BasePage } from '../base-page';
import {CartPage} from '../cartpart';

export const Cart = () => {
  const BasePageWithLoading = withLoading(BasePage);
  const products=useSelector((state) => state.cart.cartItems)
  return (
      <BasePageWithLoading title={"shopping cart"}>
        <CartPage products={products}/>
      </BasePageWithLoading>
  )
}
