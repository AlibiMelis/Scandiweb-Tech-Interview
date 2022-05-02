import React, { PureComponent } from "react";
import "./CheckoutProgressBar.style";

class CheckoutProgressBar extends PureComponent {
  render() {
    const { currentStep, steps } = this.props;
    const currentInd = steps.findIndex((step) => step.key === currentStep);
    return (
      <div className="progress-bar">
        {steps.map((s, ind) => (
          <>
            <div
              className={
                "step" + (ind <= currentInd ? " passed" : "") + (ind === 0 || ind === steps.length - 1 ? " edge" : "")
              }
            ></div>
            {ind !== steps.length - 1 && (
              <div
                className={"checkpoint" + (ind < currentInd ? " passed" : ind === currentInd ? " active" : "")}
                data-index={ind + 1}
                data-label={s.label}
              ></div>
            )}
          </>
        ))}
      </div>
    );
  }
}

export default CheckoutProgressBar;
