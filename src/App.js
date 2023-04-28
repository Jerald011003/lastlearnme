// adasdasda
import './App.css';
import { Container } from "react-bootstrap";
import React from "react"
import './bootstrap.min.css'
import { Header } from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import { HomeScreen } from './screens/HomeScreen'
import  Login  from './SignUp/Login'
import { Logout } from './SignUp/Logout'
import Register   from './SignUp/Register'
import SubscriptionScreen from './screens/SubscriptionScreen'
import  MoviePlaybackScreen   from './screens/MoviePlaybackScreen'
import  User  from "./SignUp/User"
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'










function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/User' element={<User />}  />
              <Route path='/AboutScreen' element={<AboutScreen />}  />
              <Route  path="/MoviePlaybackScreen/:id" element={<MoviePlaybackScreen />}  />
              <Route path='/ProfileScreen' element={<ProfileScreen />}  />
              <Route path='/SubscriptionScreen' element={<SubscriptionScreen />}  />
              <Route path='/ProductScreen' element={<ProductScreen />}  />
              <Route path='/Logout' element={<Logout />}  />
              <Route path='/login' element={<Login />}  />
              <Route path='/Product/:id' element={<ProductScreen />} />
              <Route path='/register' element={<Register />}  />
              
              
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;