import {useEffect} from "react";
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
export const Logout = () => {
  

  return(
<>
<div>
<h1 style={{ display: "flex" }}>you have been logout.
 thank you for using Learn Me!!!!!</h1>
<img src="images/mascot.png" style={{ width: "500px" }} />
<div className="mt-3">
<span>Want to login again?</span>{' '}
<Link to="/login">
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
  <div className="text">Login here!!!</div>
</button></Link>
  
</div>
</div>
</>
  );
};
