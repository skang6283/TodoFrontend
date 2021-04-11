import React from 'react';

import classes from './Toolbar.module.css'
import LeftItems from '../NavigationItems/LeftItems'
import RightItems from '../NavigationItems/RightItems'

import { NavLink } from 'react-router-dom';

const toolbar = ( props ) =>{
  return(
    <div class="ui secondary pointing menu">
      <div class="left menu">
        <LeftItems />
      </div>
      <div class='right menu'>
        <RightItems />
      </div>
    </div>
  );
}

export default toolbar;
