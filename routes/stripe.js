import express from "express";
import Stripe from "stripe";
import "dotenv/config";

const app = express();
const router = express.Router();

const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  // console.log(req.body);
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          // images: [item.image],
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    // line_items: [
    //   {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: "string",
    //       },
    //       unit_amount: 7 * 100,
    //     },
    //     quantity: 2,
    //   },
    // ],
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
});

export default router;
