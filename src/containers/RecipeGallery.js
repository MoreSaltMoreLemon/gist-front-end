import React from 'react'
import { connect } from 'react-redux'

const RecipeGallery = (props) => {

  return (
     <div>Gallery</div>
  )
}

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: () => dispatch({type: 'GET_ALL_RECIPES'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeGallery)