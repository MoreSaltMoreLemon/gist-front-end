import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


function mapRecipeStepsToDoughnutData(recipe_steps) {
  return recipe_steps.map(step =>
    ({
      // id: step.name, 
      color: step.color, 
      name: step.name, 
      // value: Number(step.yield), 
      // unit: step.yield_unit_id,
      children: [...step.step_ingredients, ...step.step_sub_recipes].map(content => {
        return {
          name: content.is_sub_recipe ? content.sub_recipe.name : content.ingredient.name,
          quantity: Number(content.quantity),
          color: content.color
        }
      })
    })
  )
}



const Doughnut = ({recipe}) => {
  const data = { name: recipe.name, children: mapRecipeStepsToDoughnutData(recipe.recipe_steps)}
  console.log(data)
  return (
      <ResponsiveSunburst
          data={data}
          style={{height: '300px', width: '300px'}}
          margin={{
              "top": 40,
              "right": 20,
              "bottom": 20,
              "left": 20
          }}
          identity="name"
          value="quantity"
          cornerRadius={3}
          borderWidth={2}
          borderColor="white"
          colors={data => data.color}
          childColor={
            data => data.color
          }
          colorBy={data => data.color}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
      />
  )
}

export default Doughnut