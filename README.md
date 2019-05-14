# Roughly.Recipes

## The Ratio-focused Recipe App

The goal: create a simple to use web-app that puts the ratios between ingredients at the forefront.

Using a sunburst graph and bar graphs, we can quickly and intuitively see the proportions of our recipes, as well as edit the contents and quantities with a quick click.

Recipes can be divided into multiple step, each of which can be scaled individually.
Recipes can be shared publicly, and used by other users to create their own dishes.

## About
* React app, utilizing hooks, redux, react-router-dom, and @nivo sunburst charts.
* Custom CSS styling with extensive use of CSS grid for layout.
* Rails API backend, following RESTful pattern with JWT authentication.

## Todo:

### Features
- [ ] Have focus shift intuitively from input to input
- [ ] Recipe Scaling 
- [ ] Incorporate unit scaling into ratio bar displays
- [ ] Make recipe-step yields either calculated or custom set. Currently only calculated
- [ ] Improve form submit so that enter submits the form. Some forms require a click
- [ ] Make recipes favoritable and appear in user list of ingredients
- [ ] Make auto-suggestion list of ingredients from available ingredients
- [ ] Improve error handling for erroneous requests
- [ ] Steamline sub-recipe and ingredient forms
- [ ] Improve Buttons
- [ ] Add Instructions field to step form

### Error Handling
- [ ] Improve error messages upon fetch failure
- [ ] Capture all failed requests
- [ ] Show waiting message upon long wait time
- [ ] Retry request

### Styling
- [ ] Reduce the mousover effect on elements. Introduce transition to slow down.