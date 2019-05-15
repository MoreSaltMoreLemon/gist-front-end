import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { string } from "postcss-selector-parser";

// Make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// Currently contained with a 300x300 box.

function mapRecipeToSunburstDataFormat(recipe_steps) {
  // For all recipe steps, create a nested structure containing their 
  // ingredient components.
  // {
  //   color: string,
  //   name: string,
  //   children: [
  //     {
  //       name: string,
  //       quantity: number,
  //       color: string
  //     }
  //   ]
  // }
  return recipe_steps.map(step => ({
    color: step.color,
    name: step.name,
    children: [...step.step_ingredients, ...step.step_sub_recipes].map(
      content => {
        // Need to draw value from different properties depending upon
        // the source. Toggles between them.
        return {
          name: content.is_sub_recipe
            ? content.sub_recipe.name
            : content.ingredient.name,
          quantity: Number(content.quantity),
          color: content.color
        };
      }
    )
  }));
}

const Doughnut = ({ recipe }) => {
  const data = {
    name: recipe.name,
    children: mapRecipeToSunburstDataFormat(recipe.recipe_steps)
  };
  return (
    <ResponsiveSunburst
      data={data}
      style={{ height: "300px", width: "300px" }}
      margin={{
        top: 40,
        right: 20,
        bottom: 20,
        left: 20
      }}
      identity="name"
      value="quantity"
      cornerRadius={3}
      borderWidth={2}
      borderColor="white"
      colors={data => data.color}
      childColor={data => data.color}
      colorBy={data => data.color}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  );
};

export default Doughnut;
