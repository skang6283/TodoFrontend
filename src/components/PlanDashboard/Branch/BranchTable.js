import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Branch from './Branch'
import ToggleableBranchForm from './ToggleableBranchForm'

class BranchTable extends Component{
  render(){

    const branches = this.props.goals.map((goal)=>(
      <div
        className='column'>
        <Branch
          key = {goal.id}
          goalId = {goal.id}
          title = {goal.title}
          intermediates={goal.intermediates}


          deleteGoal={this.props.deleteGoal}
          updateGoal={this.props.updateGoal}
          deleteIntermediate={this.props.deleteIntermediate}
          updateIntermediate={this.props.updateIntermediate}
          openTimer={this.props.openTimer}

          addIntermediate={this.props.addIntermediate}
          />
      </div>
    ));

    return(
      <div className='ui three column centered grid'>
          {branches}
          <ToggleableBranchForm
            handleCreateBranch={this.props.handleCreateBranch}
          />
      </div>
    );
  }
}

export default BranchTable;
