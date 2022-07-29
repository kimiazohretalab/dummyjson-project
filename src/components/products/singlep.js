import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { withLoading } from '../../HOC';
import { BasePage } from '../base-page';
import { SingleProductCard } from './singleproductcard';

export const SingleP = () => {
  const { id } = useParams()
  const [productInfo, setProductInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const BasePageWithLoading = withLoading(BasePage);
  useEffect(()=>{
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(result => {
        console.log(result.data)
        setProductInfo(result.data)
        setIsLoading(false)
      })
  },[id]);



  return (
      <BasePageWithLoading isLoading={isLoading} title={'Product details'}>
        <SingleProductCard user={productInfo} />
      </BasePageWithLoading>
  )
}
