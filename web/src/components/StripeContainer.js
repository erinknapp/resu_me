import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Paymentform from "./PaymentForm";
require("dotenv").config();

const PUBLIC_KEY = "pk_test_51KfEKWHeeSIfHNfYwtaygN00JRzjr3jRVxBNusLDCIyA36rjmPMKko0RqLGxLI0rutkfGYUkqimKn0On7Gyg7aFs00NT98y26k";
// const PUBLIC_KEY = process.env.PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripecontainer = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<Paymentform />
		</Elements>
	);
};

export default Stripecontainer;
