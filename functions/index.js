const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HSUxlEqoTjZfWaAC4wwWvOpblxXtEZPmx9dDyACTzJuPxhp5qAbbsKp6Ji0I84gv4j9ByVPCKJgPVfITppgjtqk00YYPGLkYH"
);

// ** Setting up API **
// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received! for amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-d140e/us-central1/api
