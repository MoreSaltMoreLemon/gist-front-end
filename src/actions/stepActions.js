function addStepAction(recipe, step) {
  return {
    type: 'ADD_STEP',
    recipe,
    step
  }
}

function editStepAction(recipe, step) {
  return {
    type: 'EDIT_STEP',
    recipe,
    step
  }
}

function removeStepAction(recipe, step) {
  return {
    type: 'REMOVE_STEP',
    recipe,
    step
  }
}

export {
  addStepAction,
  editStepAction,
  removeStepAction
}