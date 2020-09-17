const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//secret key from stripe
const stripe = require("stripe")("");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/sim", (request, response) => response.status(200).send("simranjeet"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub-units of the currency
    currency: "usd",
  });

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app); //for exportimg backend express running on the cloud functions

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api

// to emulate this backend use following command in function folder
// firebase emulators:start
