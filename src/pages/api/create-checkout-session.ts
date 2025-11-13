import Stripe from "stripe";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { priceId } = await request.json();

    if (!priceId) {
      return new Response(JSON.stringify({ error: "Price ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-10-29.clover",
    });

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/purchase-cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to create checkout session",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
