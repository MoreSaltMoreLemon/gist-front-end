import React, { useReducer } from 'react';
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'


const RecipeForm = (props) => {
  return (
    <div className='content-container'>
      <ContentHeader />
      <ContentBody />
    </div>
  );
};

export default RecipeForm;