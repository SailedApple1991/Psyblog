import { LoaderArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { stripeClient } from '~/utils/stripe.server';

export async function loader() {
  const result = await stripeClient.products.list();
  return result.data;
}

export default function CheckoutPopup() {
  const items: any[] = useLoaderData();
  return (
    <>
      {items.map(item => <div key={item.id}><Link to={`/payments/product/${item.id}`}>{item.name}</Link></div>)}
    </>
  );
}
