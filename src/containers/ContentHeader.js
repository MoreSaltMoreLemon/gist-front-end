import React from 'react';
import RecipeHeader from '../components/RecipeHeader'

const ContentHeader = (props) => {
  return (
    <div className='content-header' style={{'height': '300px', 'width': '300px'}}>
      <RecipeHeader recipe={{name: 'Recipe Name'}} />
    </div>
  );
};

export default ContentHeader;