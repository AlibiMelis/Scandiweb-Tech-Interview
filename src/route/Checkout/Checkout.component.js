import React from "react";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import CheckoutProgressBar from "Component/CheckoutProgressBar";
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from "@scandipwa/scandipwa/src/route/Checkout/Checkout.config";

class Checkout extends SourceCheckout {
  render() {
    const checkoutSteps = [
      {
        key: SHIPPING_STEP,
        label: "Shipping",
      },
      {
        key: BILLING_STEP,
        label: "Review & Payments",
      },
      {
        key: DETAILS_STEP,
        label: "Details",
      },
    ];
    return (
      <main block="Checkout">
        <CheckoutProgressBar currentStep={this.props.checkoutStep} steps={checkoutSteps} />
        <ContentWrapper wrapperMix={{ block: "Checkout", elem: "Wrapper" }} label={__("Checkout page")}>
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
