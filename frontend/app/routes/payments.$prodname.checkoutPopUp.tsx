import { useLoaderData, useNavigate } from '@remix-run/react';
import { checkEnvVars, checkStatus } from '~/utils/errorHandling';
import { LoaderArgs } from '@remix-run/node';
import { useState, useEffect } from 'react';

interface ProductPaymentDetails {
  // Define the properties for product payment details
  id: string;
  name: string;
  price: number;
  currency: string;
  // Add any other required properties here
}

enum PaymentTypes {
  Test = 1,
  Tarot = 2,
  Other = 3
}

function mapPaymentType(param: string): PaymentTypes {
  switch (param) {
    case 'test':
      return PaymentTypes.Test;
    case 'tarot':
      return PaymentTypes.Tarot;
    default:
      return PaymentTypes.Other;
  }
}

export async function loader({ params }: LoaderArgs) {
  const prodname: string = params.prodname as string;
  const prodid = mapPaymentType(prodname);

  console.log(params);
  checkEnvVars(); // check environmental variables

  try {
    const response = await fetch(`${process.env.STRAPI_URL_BASE}/strapi-stripe/getProduct/2`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    checkStatus(response); // check the status

    const data = await response.json(); // get the json response
    console.log(data)
    const productDetails: ProductPaymentDetails = {
      id: data.id,
      name: data.description, // Update to use 'description' instead of 'name'
      price: data.price,
      currency: data.currency,
    };

    return { productPaymentDetails: productDetails }; // return the data as an object
  } catch (error) {
    console.error('Error retrieving product payment details:', error);
    throw new Error('Failed to load product payment details');
  }
}

export default function CheckoutPopup() {
  const navigate = useNavigate();
  const { productPaymentDetails } = useLoaderData<{ productPaymentDetails: ProductPaymentDetails }>();

  const handlePayment = () => {
    // Logic for initiating the payment process
    navigate('/paymentsprocessPayment');
  };

  const handleClose = () => {
    navigate('/');
  };

  useEffect(() => {
    // Dynamically add the Stripe script to the document
    const script = document.createElement('script');
    script.src = 'http://localhost:1337/plugins/strapi-stripe/static/stripe.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script from the document when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="product-payment-details">
      {productPaymentDetails ? (
        <div>
          <h2>{productPaymentDetails.name}</h2>
          <p>Price: {productPaymentDetails.price} {productPaymentDetails.currency}</p>
          <button class="css style" type="button" class="SS_ProductCheckout" data-id="<productPaymentDetails.id>" data-email="test@test.com" data-url="http://localhost:1337"> BuyNow </button>
          <button onClick={handleClose}>Close</button>
        </div>
      ) : (
        <p>Loading product payment details...</p>
      )}
    </div>
  );
}
