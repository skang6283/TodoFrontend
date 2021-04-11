import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import GoalForm from './Goal/GoalForm';
class ToggleableBranchForm extends Component {
  state={
    isClicked:false,
  }

  handleFormOpen =()=>{
    this.setState({isClicked:true});
  }
  handleFormClose=()=>{
    this.setState({isClicked:false});
  }

  render(){
    const toRender= this.state.isClicked ?
          <GoalForm
            handleSubmit={this.props.handleCreateBranch}
            handleFormClose={this.handleFormClose}
            />:
          <div className='ui basic segment center aligned'>
            <i
              className="large plus square icon"
              onClick={this.handleFormOpen}
              />
          </div>

    return(
      <div>
        {toRender}
      </div>
    );
  }
}

export default ToggleableBranchForm;
