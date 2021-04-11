import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { renderRemainingString,millisecondsToHuman } from './timerHelper'

import TimerButtons from '../TimerButtons/TimerButtons'

class Timer extends Component {
  state={
    total: 3000,
    elapsed:0,
    isStarted:false,

    title:'this.props.title',
    goalId: this.props.goalId,
    intermediateId: this.props.intermediateId
  }

  componentDidMount =()=>{
    document.addEventListener("keydown", this.handleArrowKeyDown);
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount =()=>{
    document.removeEventListener('keydown',this.handleArrowKeyDown);
    clearInterval(this.forceUpdateInterval);
  }

  handleArrowKeyDown=(e)=>{
    switch (e.keyCode) {
        case 38: //up
          this.increase5Min();
          break;
        case 40: //down
          this.decrease5Min();
          break;
        case 13: //enter
          this.startTimer();
          break;
        case 32: //spac
          console.log('space')
          this.stopTimer();
          break;
    }
  }

  increase5Min=()=>{
    if (!this.state.isStarted){
        this.setState({total:this.state.total+300000});
    }
  }

  decrease5Min=()=>{
    if (!this.state.isStarted){
      if ((this.state.total-300000) >= 600000){
          this.setState({total:this.state.total-300000});
      }else{
        this.setState({total:600000});
      }
    }

  }

  startTimer=()=>{
    if(!this.state.isStarted){
      this.setState({
        runningSince:Date.now(),
        isStarted:true,
      });
    }
  }

  cancelTimer = () =>{
    this.setState((prevState)=>{
      return {
        total: prevState.total,
        isCompleted:false,
        elapsed:0,
        isStarted:false,
      }
    });
  }


  handleTimerDone=()=>{
    console.log('handletimer done')

    this.setState({isStarted:false});
    this.props.updateTimeSpent({
      timeSpent:this.state.total,
      goalId: this.state.goalId,
      intermediateId: this.state.intermediateId
    })
  }


  render(){
    const remaining = this.state.isStarted ? renderRemainingString(
          this.state.elapsed, this.state.runningSince, this.state.total
        ) : millisecondsToHuman(this.state.total - this.state.elapsed);

    if (remaining === '00:00:00' & !this.state.isCompleted){
      this.handleTimerDone()
    }



    const rem = Date.now() - this.state.runningSince;

    let button = null;
    if (!this.state.isStarted){
      button =  <TimerButtons
        onButtonClick={this.startTimer}
        onBackCilick={this.props.closeTimer}

        label = {'start'}
        isStarted={this.state.isStarted}
        color = {"green"}
      />
    } else {
      button = (rem) < 10000 ?  <TimerButtons
        onButtonClick={this.cancelTimer}
        onBackCilick={this.props.closeTimer}

        label = {'Cancel Within'}
        isStarted={this.state.isStarted}
        color = {"red"}
        rem={rem}
      />: null;
    }

    return(
      <div className='ui two column centered grid'
      >
        <div className='column'>
          <h1
            style={{fontSize:"100px", textAlign:"center"}}
          >
            {remaining}
          </h1>
          {button}
        </div>
      </div>
    )
  }
}


export default Timer;
