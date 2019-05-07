import * as React from 'react';
import '../css/appFooter.css'

const AppFooter = (props) => {
  const year = new Date().getFullYear()

  return <footer className='app-footer'>{`Copyright © ${year}, Ezra Schwepker`}</footer>;
};

export default AppFooter;