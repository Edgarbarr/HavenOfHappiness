import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../custom-button/custom-button.component";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_OAnKQjHYrttJdsaouaDcBA6f00zGP9YjLH";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use your provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Haven Of Happiness"
      billingAddress
      shippingAddress
      image="https://i.etsystatic.com/isla/e7a1a1/40347398/isla_75x75.40347398_nvu4bmdm.jpg?version=0"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};
export default StripeCheckoutButton;
