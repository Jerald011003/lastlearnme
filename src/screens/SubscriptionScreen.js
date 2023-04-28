import React from 'react';
import './subscription.css';
import { Link, useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
const SubscriptionScreen = () => {
  const initialOptions = {
    "client-id": "AYNnCSQdXD2Kuu2aKDoXOeiHyGdmch03IfqadvsPvh8f3Ucz9azwC1_sLP0JfVS9kK1jHimmoVSjg9hf",
    currency: "USD",
    intent: "subscription",
    vault: true,
  };

  return (
    <>
 
    </>
  );
};

export default SubscriptionScreen;