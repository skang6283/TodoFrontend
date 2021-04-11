import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import EditableGoal from './Goal/editableGoal'
import IntermediateList from './Intermediates/IntermediateList'


class Branch extends Component{
  state={
    goalUpdate:false,
    intermediateUpdate:false,
    isEditing:false,
  }

  handleDeleteClick=()=>{
    this.props.deleteGoal(this.props.goalId)
  }

  handleEditClick=()=>{
    this.setState({isEditing:!this.state.isEditing});
  }



  render(){
    const editClass=[]

    if (this.state.isEditing){
      editClass.push('check icon')
    }else{
      editClass.push('edit icon')
    }

    const toRender=
      <div>
        <h3>
        <i
          onClick={this.handleEditClick}
          className={editClass.join(' ')} />
        <i
          onClick={this.handleDeleteClick}
          className='trash alternate icon' />
        </h3>
        <div className='ui center aligned'>
          <EditableGoal
              goalId = {this.props.goalId}
              title = {this.props.title}
              isEditing= {this.state.isEditing}

              deleteGoal={this.props.deleteGoal}
              updateGoal={this.props.updateGoal}
            />
        </div>

        <div className='ui basic segment'>

          <IntermediateList
            goalId={this.props.goalId}
            intermediates = {this.props.intermediates}
            isEditing={this.state.isEditing}


            addIntermediate={this.props.addIntermediate}
            deleteIntermediate={this.props.deleteIntermediate}
            updateIntermediate={this.props.updateIntermediate}
            openTimer={this.props.openTimer}

          />
        </div>
      </div>
    ;

    return(
        <div className='ui raised segment'>
          <div>
            {toRender}
          </div>

        </div>
    );
  }
}

export default Branch;
