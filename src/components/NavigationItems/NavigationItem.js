import React from 'react';

import { NavLink } from 'react-router-dom';

const navigationItem=( props )=>{
  return(
    <a className='ui item'>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName='active'
      >
      {props.children}
      </NavLink>
    </a>


  );
};

export default navigationItem;
