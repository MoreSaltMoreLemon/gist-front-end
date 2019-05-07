import React, { useState } from "react";
import StepIngredientForm from "./StepIngredientForm";
import StepSubRecipeForm from "./StepSubRecipeForm";
import StepIngredientCard from "./StepIngredientCard";

// sub_recipe
// color: {id: 1, hex: "#a6cee3"}
// color_id: 1
// id: 1
// instruction: null
// is_sub_recipe: true
// recipe_step: {id: 1, recipe_id: 1, yield: null, yeild_in_grams: null, yield_unit_id: 1, …}
// recipe_step_id: 1
// sequence_order: 0
// sub_recipe:
// color_id: 1
// id: 2
// name: "apple butter"

// sub_recipe_id: 2
// unit: {id: 1, name: "g", gram_conversion_factor: "1.0"}
// unit_id: 1

const StepIngredientDisplayToggle = ({
  stepComponentContent,
  is_sub_recipe,
  total
}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  if (!stepComponentContent || showEditForm) {
    if (is_sub_recipe) {
      return (
        <StepSubRecipeForm
          step_sub_recipe={stepComponentContent}
          setShowForm={setShowEditForm}
          isEditForm={true}
        />
      );
    } else {
      return (
        <StepIngredientForm
          step_ingredient={stepComponentContent}
          setShowForm={setShowEditForm}
          isEditForm={true}
        />
      );
    }
  } else {
    return (
      <StepIngredientCard
        setShowForm={setShowEditForm}
        stepComponentContent={stepComponentContent}
        total={total}
        is_sub_recipe={is_sub_recipe}
      />
    );
  }
};

export default StepIngredientDisplayToggle;
