
import React from 'react';
import StepIngredientCard from './StepIngredientCard'
import StepContentShowForms from './StepContentShowForms'
import RecipeStepRatioBar from './RecipeStepRatioBar'
import RecipeStepForm from './RecipeStepForm'

const totalIngredientQuantities = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.quantity
  }, 0)
}

// recipe_step
// id: 1
// instruction: "mix"
// recipe: {id: 1, name: "spiced apple butter", color_id: 1}
// recipe_id: 1
// sequence_order: 0
// step_ingredients: (4) [{…}, {…}, {…}, {…}]
// step_sub_recipes: [{…}]
// yeild_in_grams: null
// yield: null
// yield_unit_id: 1

// step_ingredient / step_sub_recipe
// color_id: 1
// id: 1
// instruction: null
// is_sub_recipe: true
// recipe_step_id: 1
// sequence_order: 0
// sub_recipe_id: 2
// unit_id: 1

const RecipeStepCard = ({recipe_step}) => {
  let contents = []
  if (recipe_step.step_ingredients &&
      recipe_step.step_sub_recipes) {
        contents = [...recipe_step.step_ingredients, ...recipe_step.step_sub_recipes]
      } 
  const sequence = []
  
  const total = 1; // total the quantity of all of the ingredients in grams || each

  contents.map(content => {
      sequence[content.sequence_order] = (
        <StepIngredientCard 
          key={content.id} 
          is_sub_recipe={content.is_sub_recipe}
          step_ingredient={content} 
          total={total}
          sequenceEndIndex={sequence.length}  
        />)
  })
  
  return (
    <div className='recipe-step-card'>
      <RecipeStepForm recipe_step={recipe_step}>
        {sequence}
        <StepContentShowForms />
      </RecipeStepForm>
    </div>
  );
};

export default RecipeStepCard;