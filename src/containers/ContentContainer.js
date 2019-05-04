import React, { Component } from 'react';
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'


const ContentContainer = (props) => {
  return (
    <div className='content-container'>
      <ContentHeader />
      <ContentBody />
    </div>
  );
};

export default ContentContainer;