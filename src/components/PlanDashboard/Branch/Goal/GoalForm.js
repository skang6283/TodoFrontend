import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons'

class GoalForm extends Component {
  state={
    goalId:this.props.goalId || '',
    title: this.props.title || '',
  };

  handleTitleChange=(e)=>{
    this.setState({title:e.target.value});
  };

  handleSubmitOnClick=()=>{
    this.props.handleSubmit({
      ...this.state
    });
    this.props.handleFormClose();
  };


  render(){
    const green = this.props.goalId ?'Update':'Start!'
    return(
      <div className='ui centered card'>
        <div className='ui content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                placeholder={"Let's do this"}
                onChange={this.handleTitleChange}
                />
            </div>

          </div>
        </div>
        <Buttons
          onGreenClick={this.handleSubmitOnClick}
          onRedClick={this.props.handleFormClose}
          green={green}
          red={'NeverMind'}
        />
      </div>
    );
  }
}

export default GoalForm;
