import React from 'react';
import Doughnut from '../components/Doughnut'
import RecipeHeader from '../components/RecipeHeader'

const ContentHeader = (props) => {
  return (
    <div className='content-header' style={{'height': '300px', 'width': '300px'}}>
      <div className='recipe-graph-doughnut-container'>
        <Doughnut className='recipe-graph-doughnut' />
      </div>
      <RecipeHeader />
    </div>
  );
};

export default ContentHeader;