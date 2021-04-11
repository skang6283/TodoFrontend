import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class TimerButtons extends Component {

  handleStart=()=>{
    this.props.onButtonClick()
  }

  handleBack=()=>{
    this.props.onBackCilick()
  }

  render() {
    const color = this.props.color
    const classes=['fluid','ui','button',color]
    const seconds = this.props.rem ? Math.floor(10 - (this.props.rem / 1000) % 60) : '';

    const back = !this.props.isStarted ?
    <div
      className="ui left floated button"
      onClick={this.handleBack}
    >
    Back
    </div> : null;

    return (
      <React.Fragment>
        {back}
        <div
          onClick={this.handleStart}
          className= {classes.join(' ')}
        >
          {this.props.label + ' ' +seconds}
        </div>
      </React.Fragment>
    );
  }
}

export default TimerButtons;
