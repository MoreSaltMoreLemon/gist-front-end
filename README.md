# [Roughly.Recipes](https://roughly.recipes)

## The Ratio-focused Recipe App

The goal: create a simple to use web-app that puts the ratios between ingredients at the forefront.

Using a sunburst graph and bar graphs, we can quickly and intuitively see the proportions of our recipes, as well as edit the contents and quantities with a quick click.

Recipes can be divided into multiple step, each of which can be scaled individually.
Recipes can be shared publicly, and used by other users to create their own dishes.

## About
* React app, utilizing hooks, redux, react-router-dom, and @nivo sunburst charts.
* Custom CSS styling with extensive use of CSS grid for layout.
* Rails API backend, following RESTful pattern with JWT authentication.

Note: I violated JavaScript camelCase naming conventions throughout this app in order to keep the property names in obvious correllation with the Rails backend and the JSON that was served down. This served to reduce errors and make the sourced data obvious. I would however *love* to know a better way to handle this.

## Todo:

### Bugs:

### Functionality:
- [ ] Protect recipes used as ingredients from deletion by user.
- [x] Have focus shift intuitively from input to input
- [x] Incorporate unit scaling into ratio bar displays
- [x] Make recipe-step yields calculate based upon recipe-step unit
- [x] Improve form submit so that enter submits the form. Some forms require a click
- [ ] Steamline sub-recipe and ingredient forms

### Features:
- [ ] Recipe Scaling 
- [ ] Make recipes favoritable and appear in user list of ingredients
- [ ] Make auto-suggestion list of ingredients from available ingredients
- [ ] Add Instructions field to step form
- [ ] Drag and drop re-ordering
- [ ] Have ratio markers for each bar ratio

### Error Handling:
- [x] Improve error messages upon fetch failure
- [x] Capture all failed requests
- [ ] Show waiting message upon long wait time
- [ ] Retry request

### Styling:
- [x] Reduce the mousover effect on elements. Introduce transition to slow down.
- [x] Button font-sizing when switching to mobile view.
- [x] Alignment and bounding-box sizing for home-page bullet points

## Project Notes && Lessons Learned

* Plan ahead, but don't pre-optimize. 
* Build with flexibility in mind over a predetermined structure.
* Build in small iterations rather than large blocks.

I started with a front-end first approach, building out the skeleton of the front end application prior to building any functionality or back-end. This had the advantage of giving me something to look at that wasn't completely awful and an idea of what components I would need to build. However I regard this as a mistake as it lead to me building out a number of components which I needed to significantly refactor once I started building out actual functionality.

I also designed the application with re-usable components in mind. The intent being that container components would be re-used for layout for both presentational and input components. This idea has a moderate amount of worth. However it was an optimization that was unnecessary early in the project and served to complicate it. Pre-optimization is an anti-pattern that leads to wasted efforts in an attempt to anticipate future needs. The work that I did early on to optimize actually hindered my progress once I began working in the functionality and ultimately wasn't as useful as I had hoped it would be. In a larger team based project perhaps this would have ultimately been useful forthought, however it did not prove to be so here.

While I like the appearance of the overly complicated form that I made, it has intuitive usability issues that would be better addressed by a more conventional format. Ultimately my goal was to hide the conventional form experience behind something that was lighterweight and more intuitive. However the Redux persistance method that I settled upon meant that I needed a formal point of hitting up the backend and actually saving the data. If I instead was to persist the entire recipe with all of its components upon component unload or a single save committal, then I could do away with the multiple save points and make the user experience much more enjoyable. I'm considering doing that for a later refactor, but for now I'm tied to saving each sub-component upon editing.

Finally, there were several points where I was writing a significant amount of code without testing its functionality, particularly as I worked Redux into the application. While my code was largely functional with little reworking once it was wired in, this was both daunting and inefficient. It is better to build out gradual functionality, testing along each step of the process than to simply write out a lot additional functionality then integrate it. Small steps are simpler to approach and provide a continuous stream of positive feedback that helps the project progress.
