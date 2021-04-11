import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class IntermediateForm extends Component {
  state={
    goalId : this.props.goalId || '',
    intermediateId:this.props.intermediateId || '',
    title:'',
  };


  handleOnChange = (e) =>{
    this.setState({title:e.target.value});
  };


  handleSubmitOnClick=()=>{
    this.props.handleSubmit({...this.state});
    this.props.handleFormClose();
  }

  render(){

    const text = this.state.intermediateId ? 'Update' :'Add';
    return(
      <div className='ui fluid card'>
        <div className='ui content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                placeholder="Let's do this"
                onChange={this.handleOnChange}
                />
            </div>


          </div>
        </div>
        <div className="ui two buttons">
          <div
            className="ui basic green button"
            onClick={this.handleSubmitOnClick}
            >{text}</div>
          <div
            className="ui basic red button"
            onClick={this.props.handleFormClose}
            >Never Mind..</div>
        </div>
      </div>

    );
  }
}
export default IntermediateForm;
