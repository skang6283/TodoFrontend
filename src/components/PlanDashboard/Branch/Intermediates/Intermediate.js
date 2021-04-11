import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons';

import { Link } from 'react-router-dom';

class Intermediate extends Component {
  state={
    goalId: this.props.goalId,
    intermediateId: this.props.intermediateId,
    title:this.props.title,
    timeSpent:this.props.timeSpent,
  };

  handleOnClick=()=>{
      this.props.openTimer(this.state)
  }


  handleDeleteClick=()=>{
    this.props.deleteIntermediate(this.state)
  };

  handleUpdateClick=()=>{
    console.log('asdf')
    this.props.openForm();
  };

  render(){
    const buttons= this.props.isEditing ? <Buttons
        onGreenClick={this.handleUpdateClick}
        onRedClick={this.handleDeleteClick}
        green={'Edit'}
        red={'Delete'}
        /> : null;

    const color =['ui','fluid','card']
    if (!this.props.isEditing){
      color.push('blue')
      color.push('link')
    }

    const handleOnClick = !this.props.isEditing ? this.handleOnClick : null;
    const timeSpentMin = Math.floor((this.state.timeSpent / 1000 / 60) % 60)

    return(
      <React.Fragment>
        <div
          className={color.join(' ')}
          onClick={handleOnClick}
          >
          <div className='content'>
              <div>
                <p
                  style={{color:"black", float:"left"}}>
                  {this.props.title}
                </p>

                <p
                  style={{color:"black", float:"right"}}
                  >
                  {timeSpentMin}

                </p>
              </div>
          </div>
          {buttons}

        </div>
      </React.Fragment>
    );
  }
}

export default Intermediate;
