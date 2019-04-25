import * as React from 'react';
import DrawerLeft from '../components/DrawerLeft';
import DrawerRight from '../components/DrawerRight';
import ContentContainer from './ContentContainer';



const AppBody = (props) => {
  return (
    <div className='app-body'>
      <DrawerLeft />
      <ContentContainer />
      <DrawerRight />
    </div>
  );
};

export default AppBody;