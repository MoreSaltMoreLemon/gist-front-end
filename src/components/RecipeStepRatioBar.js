import React from "react";
import StepRatioElement from "./StepRatioElement";
import { convertToGrams } from "../helpers/units";

const StepRatioBar = ({ step_contents, total }) => {
  const ratioBars = step_contents => {
    return step_contents.map(step_content => {
      const quantity = convertToGrams(step_content.unit_id, Number(step_content.quantity));

      return (
        <StepRatioElement
          key={step_content.uuid}
          color={step_content.color}
          ratio={(quantity / total) * 100}
          label="placeholder label"
        />
      );
    });
  };

  return (
    <div className="step-ratio-bar">
      {step_contents ? ratioBars(step_contents) : null}
    </div>
  );
};

export default StepRatioBar;
