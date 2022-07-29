import React, { useEffect, useState } from 'react'
import { Add } from './add';
import './singlecard.css'
import { NavLink } from 'react-router-dom';
import { usePrompt } from '../confirmation/leave';



export const SingleProductCard = ({user}) => {
  
  const [userInfo, setUserInfo] = useState({
    title: '',
    images: '',
    id: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    rating:''
  });
  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

 
    const formIsDirty = true; // Condition to trigger the prompt.
    usePrompt( 'Leave screen?', formIsDirty );
  


  return (
    <>
      <div className='title-card'>
        {userInfo.title}
      </div>
      <img className='design-image' src={userInfo.images[2]} alt=""  />
      <div className='design-card'>ID : {userInfo.id}</div>
      <div className='design-card'>description : {userInfo.description}</div>
      <div className='design-card'>price : {userInfo.price}</div>
      <div className='design-card'>brand : {userInfo.brand}</div>
      <div className='design-card'>category : {userInfo.category}</div>
      <div className='design-card'>rating : {userInfo.rating}</div>
      <br />
      <Add props={userInfo} />
      <br />
      <NavLink to='/'><button className='icon-button'>Leave</button></NavLink>
    </>
  )
}
