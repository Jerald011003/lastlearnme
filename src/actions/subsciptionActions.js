import { BASIC_SUBSCRIPTION, PREMIUM_SUBSCRIPTION, UPDATE_SUBSCRIPTION } from '../constants/subscriptionConstants';

export const basicSubscriptionAction = () => ({
  type: BASIC_SUBSCRIPTION,
});

export const premiumSubscriptionAction = () => ({
  type: PREMIUM_SUBSCRIPTION,
});

export const updateSubscription = (selectedSubscription) => {
  return {
    type: UPDATE_SUBSCRIPTION,
    payload: selectedSubscription,
  };
};

