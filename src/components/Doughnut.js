import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveSunburst } from '@nivo/sunburst'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const defaultDoughnutData = [
  {
    id: '1',
    color: '#3e323c',
    label: '',
    value: 100, 
    unit: '',
    action: ''
  },
  {
    id: '2',
    color: '#3e323c',
    label: '',
    value: 100, 
    unit: '',
    action: ''
  }
]

function mapRecipeStepsToDoughnutData(recipe_steps) {
  return recipe_steps.map((step, index) =>
    ({
      id: step.name, 
      color: (step.color || '#3e323c'), 
      label: step.name, 
      value: Number(step.yield), 
      unit: step.yield_unit_id
    })
  )
}




const Doughnut = ({recipe}) => {
  const data = !!(recipe && recipe.recipe_steps) ? mapRecipeStepsToDoughnutData(recipe.recipe_steps) : defaultDoughnutData
  // debugger
  const colors = data.map(element => element.color)
  // console.log('Doughnut', recipe, data)
  return (
    <ResponsivePie
        data={data}
        style={{height: '300px', width: '300px'}}
        margin={{
            "top": 40,
            "right": 80,
            "bottom": 80,
            "left": 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={colors}
        borderWidth={1}
        borderColor={{
            "from": "color",
            "modifiers": [
                [
                    "darker",
                    0.2
                ]
            ]
        }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkStrokeWidth={3}
        radialLabelsLinkColor={{
            "from": "color"
        }}
        slicesLabelsSkipAngle={25}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        // legends={[
        //     {
        //         "anchor": "bottom",
        //         "direction": "row",
        //         "translateY": 56,
        //         "itemWidth": 100,
        //         "itemHeight": 18,
        //         "itemTextColor": "#999",
        //         "symbolSize": 18,
        //         "symbolShape": "circle",
        //         "effects": [
        //             {
        //                 "on": "hover",
        //                 "style": {
        //                     "itemTextColor": "#000"
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
  )
}

export default Doughnut