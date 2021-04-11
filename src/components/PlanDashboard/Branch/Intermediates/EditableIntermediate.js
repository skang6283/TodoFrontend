import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import IntermediateForm from './IntermediateForm'
import Intermediate from './Intermediate'

class EditableIntermediate extends Component {
  state={
    isOpen:false,
  };

  handleCloseForm=()=>{
    this.closeForm();
  };

  handeOpenForm=()=>{
    this.openForm();
  };

  openForm =()=>{
    console.log('openform')
    this.setState({isOpen:true});
  };

  closeForm=()=>{
    this.setState({isOpen:false});
  };

  render(){
    const toRender = this.state.isOpen ?
      <IntermediateForm
        goalId={this.props.goalId}
        intermediateId={this.props.intermediateId}
        title={this.props.title}
        handleSubmit={this.props.updateIntermediate}
        handleFormClose={this.handleCloseForm}
      />:

      <Intermediate
        goalId={this.props.goalId}
        intermediateId={this.props.intermediateId}
        title={this.props.title}
        deleteIntermediate={this.props.deleteIntermediate}
        openForm={this.handeOpenForm}
        isEditing={this.props.isEditing}
        openTimer={this.props.openTimer}
        timeSpent={this.props.timeSpent}
      />;

    return(
      <React.Fragment>
        {toRender}
      </React.Fragment>
    );
  }
}


export default EditableIntermediate;
