import React from 'react'
import Cardsytem from'./Cardsytem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
    
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__item'>
            <Cardsytem
              src='images/dum1.jpg'
              text='lo-fi image tester'
              label='label-tester'
              path='/services'
            />
            <Cardsytem
              src='images/dum2.jpg'
              text='lo-fi image tester'
              label='label-tester'
              path='/services'
            />
            
          </ul>
          <ul className='cards__item'>
            <Cardsytem
              src='images/cy123.png'
              text='lo-fi image tester'
              label='label-tester'
              path='/services'
            />
            <Cardsytem
              src='dummy/dum4.png'
              text='lo-fi image tester'
              label='label-tester'
              path='/products'
            />  
            <Cardsytem
              src='dummy/cy.jpg'
              text='lo-fi image tester'
              label='label-tester'
              path='/sign-up'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default Cards

