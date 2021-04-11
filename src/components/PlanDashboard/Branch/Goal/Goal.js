import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons';

class Goal extends Component {
  state={
    title:''
  }

  handleDeleteClick=()=>{
    this.props.deleteGoal(this.props.goalId)
  }

  handleUpdateClick=()=>{
    this.props.openForm();
  }


  render(){
    const buttons = this.props.isEditing ?
                    <Buttons
                      onGreenClick={this.handleUpdateClick}
                      onRedClick={this.handleDeleteClick}
                      green={'Edit'}
                      red={'Delete'}
                      /> : null;
    const color =['ui','fluid','card']
    if (!this.props.isEditing){
      color.push('green')
    }
    return(
      <React.Fragment>
        <div className={color.join(' ')}>
          <div className='content'>

            <div className='ui center aligned'>
              <h1>{this.props.title}</h1>
            </div>

          </div>
          {buttons}
        </div>
      </React.Fragment>

    );
  }
}


export default Goal;
