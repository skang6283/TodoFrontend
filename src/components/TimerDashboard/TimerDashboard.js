import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Timer from './Timer/Timer';

class TimerDashboard extends Component {
  state = {
    title:this.props.title,
    goalId:this.props.goalId,
    intermediateId: this.props.intermediateId,
    timeSpent: 0,
  };

  render(){

    return(
      <div>
        <h2 className="ui center aligned icon header">
          <i className="stopwatch icon"></i>
          {this.state.title}
        </h2>

        <Timer
          closeTimer={this.props.closeTimer}
          goalId={this.state.goalId}
          intermediateId={this.state.intermediateId}
          updateTimeSpent={this.props.updateTimeSpent}

          />
      </div>

    );
  }

}
export default TimerDashboard;
