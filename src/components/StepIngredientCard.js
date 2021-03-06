import React from "react";
import units from "../helpers/units";
import { convertToGrams } from "../helpers/units";

const StepIngredientCard = ({
  setShowForm,
  stepComponentContent,
  total,
  is_sub_recipe
}) => {

  const unitLabel = (() => {
    const unit = units.find(
      unit => unit.value === stepComponentContent.unit_id
    );
    return unit.label;
  })();
  
  const quantity = convertToGrams(stepComponentContent.unit_id, Number(stepComponentContent.quantity));

  return (
    <div className="ingredient-card" onClick={() => setShowForm(true)}>
      <div className="ingredient-ratio-container">
        <div
          className="ingredient-ratio"
          style={{
            backgroundColor: stepComponentContent.color,
            width: `${(quantity / total) * 100}%`
          }}
        />
      </div>
      <div className="ingredient-properties">
        <span className="ingredient-name">
          {is_sub_recipe
            ? stepComponentContent.sub_recipe.name
            : stepComponentContent.ingredient.name}
        </span>
        <span className="ingredient-quantity">
          {stepComponentContent.quantity}
        </span>
        <span className="ingredient-unit">{unitLabel}</span>
        <span className="ingredient-action">
          {stepComponentContent.instruction}
        </span>
      </div>
    </div>
  );
};

export default StepIngredientCard;
