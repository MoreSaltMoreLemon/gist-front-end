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

Note: I violated JavaScript camelcase naming conventions throughout this app in order to keep the property names in obvious correllation with the rails backend and the JSON that was served down. This served to reduce errors and make the sourced data obvious. I would however *love* to know a better way to handle this.

## Todo:

### Features
- [x] Have focus shift intuitively from input to input
- [x] Incorporate unit scaling into ratio bar displays
- [x] Make recipe-step yields calculate based upon recipe-step unit
- [x] Improve form submit so that enter submits the form. Some forms require a click
- [ ] Recipe Scaling 
- [ ] Make recipes favoritable and appear in user list of ingredients
- [ ] Make auto-suggestion list of ingredients from available ingredients
- [ ] Improve error handling for erroneous requests
- [ ] Steamline sub-recipe and ingredient forms
- [ ] Add Instructions field to step form

### Error Handling
- [x] Improve error messages upon fetch failure
- [x] Capture all failed requests
- [ ] Show waiting message upon long wait time
- [ ] Retry request

### Styling
- [x] Reduce the mousover effect on elements. Introduce transition to slow down.
- [x] Button font-sizing when switching to mobile view.
- [x] Alignment and bounding-box sizing for home-page bullet points