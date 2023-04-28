import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../actions/userActions'
function User() {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="profile">
        {user ? (
          <>
            <button className="icon" onClick={() => setProfileOpen(!profileOpen)}>
  <FontAwesomeIcon icon={faUser} />
</button>

            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  
                  
                </div>
                <Link to="/login" onClick={handleLogout}>
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
                    <div className="text">Logout</div>
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to="/ProfileScreen" >

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
                  <div className="text">Profile</div>
                  <h4>Wishlist</h4>
                  
                </button>
                </Link>
                <Link to='/'>
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
                  <div className="text">home</div>
                  <h4>Help</h4>
                </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </div>
  );
}

export default User;
