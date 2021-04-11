import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Buttons extends Component {
  render() {

    return (
      <div className='ui two bottom attached fluid buttons'>

        <div
          className='ui green basic button'
          onClick={this.props.onGreenClick}
        >
        {this.props.green}
        </div>
        <div
          className='ui red basic button'
          onClick={this.props.onRedClick}
        >
        {this.props.red}
        </div>

      </div>

    );
  }
}

export default Buttons;
