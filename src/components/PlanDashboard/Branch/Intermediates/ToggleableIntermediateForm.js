import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import IntermediateForm from './IntermediateForm'


class ToggleableIntermediateForm extends Component{
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
            <div>
              <IntermediateForm
                goalId={this.props.goalId}
                handleFormClose={this.handleFormClose}
                handleSubmit={this.props.addIntermediate}
                />
            </div>:
            <div className='ui basic segment center aligned'>
              <i
                className="large plus square outline icon"
                onClick={this.handleFormOpen}
                />
            </div>
      return(
        <div className='ui column'>
          {toRender}
        </div>
      );
    }
  }

export default ToggleableIntermediateForm;
