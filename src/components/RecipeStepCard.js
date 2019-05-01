
import React from 'react';
import StepIngredientCard from './StepIngredientCard'
import StepContentShowForms from './StepContentShowForms'
import RecipeStepForm from './RecipeStepForm'

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
  let total = 1 // total the quantity of all of the ingredients in grams || each
  if (recipe_step.step_ingredients &&
      recipe_step.step_sub_recipes) {
        contents = [...recipe_step.step_ingredients, ...recipe_step.step_sub_recipes]
        total = contents.reduce((acc, el) => acc += Number(el.quantity), 0)
      } 
  const sequence = []

  contents.forEach((content, index) => {
      sequence[content.sequence_order] = (
        <StepIngredientCard 
          key={'stepIngredientCard' + content.id + index} 
          is_sub_recipe={content.is_sub_recipe}
          stepComponentContent={content} 
          total={total}
          sequenceEndIndex={sequence.length}  
        />)
  })
  
  return (
    <div className='recipe-step-card'>
      <RecipeStepForm 
        recipe_step={recipe_step}
        total={total}
      >
        {sequence}
        <StepContentShowForms recipe_step={recipe_step}/>
      </RecipeStepForm>
    </div>
  );
};

export default RecipeStepCard;