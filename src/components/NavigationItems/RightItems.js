import React from 'react';

import NavigationItem from './NavigationItem';

const rightItems =( props )=>{
  return(
    <React.Fragment>

      <NavigationItem
        link="/login"
        exact
      >
      Login
      </NavigationItem>

    </React.Fragment>
  );
};

export default rightItems;
