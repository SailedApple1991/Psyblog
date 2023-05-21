import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { stripeClient } from '~/utils/stripe.server';

export async function loader({ params }: LoaderArgs) {
  const result = await stripeClient.products.retrieve(params.prodId as string);
  return result;
}

export default function CheckoutPopup() {
  return (
    <pre>
      {JSON.stringify(useLoaderData(), null, 2)}
    </pre>
  );
}
