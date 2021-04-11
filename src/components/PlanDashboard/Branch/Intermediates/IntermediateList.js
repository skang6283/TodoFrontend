import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Intermediate from './Intermediate'
import ToggleableIntermediateForm from './ToggleableIntermediateForm'
import EditableIntermediate from './EditableIntermediate'


class IntermediateList extends Component{
  render(){
    const intermediates = []

    if (this.props.intermediates){
      intermediates.push(this.props.intermediates.map((intermediate)=>(
        <EditableIntermediate
          key = {this.props.goalId +intermediate.id}
          goalId={this.props.goalId}
          intermediateId = {intermediate.id}
          title={intermediate.title}
          isEditing={this.props.isEditing}
          timeSpent={intermediate.timeSpent}

          deleteIntermediate={this.props.deleteIntermediate}
          updateIntermediate={this.props.updateIntermediate}
          openTimer={this.props.openTimer}
          />
      )));
    }

    return(
      <React.Fragment>
        {intermediates}
        <ToggleableIntermediateForm
          goalId={this.props.goalId}
          addIntermediate={this.props.addIntermediate}
          />

      </React.Fragment>
    );
  }
}

export default IntermediateList;
