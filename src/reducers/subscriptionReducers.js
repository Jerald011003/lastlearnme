import {
    BASIC_SUBSCRIPTION,
    PREMIUM_SUBSCRIPTION,
    UPDATE_SUBSCRIPTION,
  } from '../constants/subscriptionConstants';
  
  const initialState = {
    subscriptionType: null,
    subscription: 'basic',
  };
  
  const subscriptionTypeReducer = (state = initialState, action) => {
    switch (action.type) {
      case BASIC_SUBSCRIPTION:
        return {
          ...state,
          subscriptionType: 'basic',
        };
      case PREMIUM_SUBSCRIPTION:
        return {
          ...state,
          subscriptionType: 'premium',
        };
      default:
        return state;
    }
  };
  
  const subscriptionInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SUBSCRIPTION:
        return {
          ...state,
          subscription: action.payload,
        };
      default:
        return state;
    }
  };
  
  
  export { subscriptionTypeReducer, subscriptionInfoReducer };