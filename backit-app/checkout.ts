import { loadStripe, Stripe } from "@stripe/stripe-js";

interface LineItem {
  price: string;
  quantity: number;
}

export async function checkout({ lineItems }: { lineItems: LineItem[] }): Promise<void> {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = (): Promise<Stripe | null> => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }
    return stripePromise;
  };

  const stripe: Stripe | null = await getStripe();

  if (stripe) {
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  }
}
