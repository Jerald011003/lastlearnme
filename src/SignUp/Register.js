import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ppp from './video/ppp.mp4'
import { register } from '../actions/userActions'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
function Register() {
    // const amount = 2
    const initialOptions = {
        "client-id": "AYNnCSQdXD2Kuu2aKDoXOeiHyGdmch03IfqadvsPvh8f3Ucz9azwC1_sLP0JfVS9kK1jHimmoVSjg9hf",
        currency: "USD",
        intent: "subscription",
        vault: true,
      };
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    let navigate = useNavigate()
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate, redirect])

    const submitHandler = (e) => {
      e.preventDefault()

      if (password != confirmPassword) {
          setMessage('Passwords do not match')
      } else {
          dispatch(register(name, email, password))
      }

  }

  const successPaymentHandler = (e) => {

    if (password !== confirmPassword) {
        setMessage('Passwords do not match')
    } else {
        dispatch(register(name, email, password))
    }

}
    return (
       <div>
            <video className='source' src={ppp} autoPlay loop muted style={{ position: 'absolute', top: 450, left: 960, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={ppp} type="video/mp4" />
      </video>
      <div className='card'>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
             

                {/* <PayPalScriptProvider>
               <PayPalButtons onApprove={successPaymentHandler} classname='text-center'type='submit' variant='primary'
               
                />

          </PayPalScriptProvider> */}

<Button type='submit' variant='primary'>
                    Register
                </Button>

   

            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
            </div>
            </div>
    )
}

export default Register