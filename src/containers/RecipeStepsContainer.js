import React from 'react';
import { connect } from 'react-redux'
import RecipeStepCard from '../components/RecipeStepCard'

import { addRecipeStepAction } from '../reducers/actions/recipeStepActions'

const newStep = {
  // id: undefined,
  // instruction: "mix",
  // name: "steve",
  // recipe_id: 1,
  // sequence_order: 0,
  // step_ingredients: undefined,
  // step_sub_recipes: undefined,
  // yeild_in_grams: undefined,
  // yield: undefined,
  // yield_unit_id: 1, 
}


const RecipeStepsContainer = ({recipe, addRecipeStep}) => {
  const renderRecipeSteps = recipe_steps => recipe_steps.map(recipe_step => {
      return <RecipeStepCard key={recipe_step.uuid} recipe_step={recipe_step} />
    }
  )

  return (
    <div className='recipe-form'>
      { recipe.recipe_steps ? renderRecipeSteps(recipe.recipe_steps) : null }
      <footer>
        <button 
          type='submit' 
          className='step-add-button' 
          value='Add Step'
          onClick={() => addRecipeStep(recipe.id, newStep)}
        >Add Step</button>
      </footer>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    addRecipeStep:  async (recipe_id, recipe_step) => dispatch(await addRecipeStepAction(recipe_id, recipe_step))
  }
}


export default connect(null, mapDispatchToProps)(RecipeStepsContainer)