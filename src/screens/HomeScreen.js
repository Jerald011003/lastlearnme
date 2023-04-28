import React from 'react'
import { Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './homescreen.css';
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from "react";

import Cards from './Cards'
import Loader from '../components/Loader'
import Message from '../components/Message'

export const HomeScreen = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  let navigate = useNavigate()
  
  useEffect(() => {
    if (!userInfo) {
      navigate('/login') 
    }
    
  
}, [navigate, userInfo, ])
  return (
  <>
  
  <Container> 
  {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
  <div className='video-Container'>
    <video src="/videos/video-2.mp4" autoPlay loop muted />
    <h1>Adventure awaits</h1>
    <p>this is your time to learn with us. 
      Learn with me. 
      LearnMe.</p>

      <Link to="/ProductScreen">
      <button type="button" className="btn cube cube-hover">
  <div className="bg-top">
  <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
  <div className="bg-inner"></div>
  </div>
  <div className="bg">
  <div className="bg-inner"></div>
  </div>
  <div className="text">Learn Now</div>
</button>
</Link>
<img src="images/mascot.png" style={{ width: "400px" }} />
<Cards/>    
</div>
</Container>


  
    
    </>
    


  );
}
export default HomeScreen
