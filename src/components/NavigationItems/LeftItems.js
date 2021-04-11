import React from 'react';

import NavigationItem from './NavigationItem';

const leftItems =( props )=>{
  return(
    <React.Fragment>
      <NavigationItem
          link="/"
      >
        Plan
      </NavigationItem>
      <NavigationItem
          link="/"
      >
        History
      </NavigationItem>
    </React.Fragment>
  );
};

export default leftItems;
