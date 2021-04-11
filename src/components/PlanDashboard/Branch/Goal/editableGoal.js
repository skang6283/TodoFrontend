import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Goal from './Goal'
import GoalForm from './GoalForm'

class EditableGoal extends Component {
  state={
    isOpen:false
  }

  handleCloseForm=()=>{
    this.closeForm();
  }

  handeOpenForm=()=>{
    this.openForm();
  }

  openForm =()=>{
    this.setState({isOpen:true});
  }

  closeForm=()=>{
    this.setState({isOpen:false});
  }


  render(){


    const toRender= this.state.isOpen ?
      <GoalForm
        goalId={this.props.goalId}
        title={this.props.title}
        handleSubmit={this.props.updateGoal}
        handleFormClose={this.handleCloseForm}
      />:

      <Goal
        goalId={this.props.goalId}
        title={this.props.title}
        deleteGoal={this.props.deleteGoal}
        openForm={this.handeOpenForm}
        isEditing={this.props.isEditing}

      />
    return(
      <React.Fragment>
        {toRender}
      </React.Fragment>
    );
  }
}


export default EditableGoal;
