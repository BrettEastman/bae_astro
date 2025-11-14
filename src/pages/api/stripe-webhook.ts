import Stripe from "stripe";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-10-29.clover",
  });

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response(JSON.stringify({ error: "No signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let event: Stripe.Event;

  try {
    const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET is not set");
      return new Response(
        JSON.stringify({ error: "Webhook secret not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(
      JSON.stringify({ error: `Webhook Error: ${err.message}` }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;

      // Here you could:
      // - Send an email with download link
      // - Grant access to a protected download area
      // - Update a database
      // - etc.

      console.log("Payment successful for session:", session.id);

      // You can retrieve line items if needed
      if (session.mode === "payment") {
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id,
          {
            expand: ["data.price"],
          }
        );

        // Process each purchased item
        for (const item of lineItems.data) {
          console.log("Purchased item:", item.price?.id);
          // Match to product and send download link, etc.
        }
      }

      break;

    case "payment_intent.succeeded":
      console.log("PaymentIntent was successful!");
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
