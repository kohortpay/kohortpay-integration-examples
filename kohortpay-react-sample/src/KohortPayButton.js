import React from "react";

function KohortPayButtonComponent(props) {
  return (
    <kohortpay-checkout-button
      id="kohortpay-button"
      publishable-key={props.publishableKey}
      background-color={props.backgroundColor}
      button-color={props.buttonColor}
      font={props.font}
      config={JSON.stringify(props.config)}
      border-style={props.borderStyle}
      border-radius={props.borderRadius}
    >
      {props.children}
    </kohortpay-checkout-button>
  );
}

export default KohortPayButtonComponent;
