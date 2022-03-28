import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "blue",
			color: "#000000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fff" },
			"::placeholder": { color: "#000000" },
		},
		invalid: {
			iconColor: "red",
			color: "#ffc7ee",
		},
	},
};

const Paymentform = () => {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post("http://localhost:4000/payment", {
					amount: 99,
					id: id,
				});

				if (response.data.success) {
					console.log("Successful Payment");
					setSuccess(true);
				}
			} catch (error) {
				console.log("Error", error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className='FormGroup'>
						<div className='FormRow'>
							<CardElement options={CARD_OPTIONS} />
						</div>
					</fieldset>
					<button>Purchase</button>
				</form>
			) : (
				<div>
					<h2>Welcome to Resu_Me PRO!</h2>
				</div>
			)}
		</>
	);
};

export default Paymentform;
