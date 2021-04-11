import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import BranchTable from './Branch/BranchTable';
import ToggleableBranchForm from './Branch/ToggleableBranchForm';

import TimerDashboard from '../TimerDashboard/TimerDashboard'
import Header from '../Header/Header'

import Toolbar from '../Toolbar/Toolbar'

import { v4 as uuid } from "uuid";

import axiosConfig from '../../axiosConfig'

class PlanDashboard extends Component {
  state={
    goals:[

    ],
    tmp:4,
    timerOn:false,
    activeTitle:0,
    activeGoalId:0,
    activeIntermediateId:0,
  };

  callback () {
    console.log("callback")
    axiosConfig.get('goal/')
    .then(response => {
      this.setState({goals:response.data});
    })
    .catch(error=>{
      this.setState({error:true});
    })
    .then(value=>{
      console.log(value,this.state);
    })
    .then(v=>{
      axiosConfig.get('intermediate/')
      .then(response => {
        this.setState({
          goals:this.state.goals.map((goal)=>{
            let updatedIntermediates = []
            for (const intermediate of response.data){

                if (goal.id === intermediate.goalId){
                  updatedIntermediates.push(intermediate);
                }
            }
            const newGoal = Object.assign({},goal,{
              intermediates: updatedIntermediates
            });
            return newGoal;
          })
        })
      })
      .catch(error=>{
        this.setState({error:true});
      })
    })
  }


  componentDidMount () {
    console.log("componentDidMount")
    this.callback()
  }


  deleteGoal=(goalId)=>{
    this.setState({
      goals: this.state.goals.filter(goal => goal.id !== goalId)
    });

    axiosConfig.delete(`/goal/${goalId}/`)
      .then(response=>console.log("response",response))
      .catch(error=>console.log("error",error));
  };


  updateGoal=(obj)=>{
    this.setState({
      goals: this.state.goals.map((goal)=>{
        if (goal.id === obj.goalId){
          return Object.assign({},goal,{
            title:obj.title
          });
        }else{
          return goal
        }
      })
    });

    axiosConfig.patch(`/goal/${obj.goalId}/`,{title:obj.title})
      .then(response=>console.log("response",response))
      .catch(error=>console.log("error",error));
  }


  deleteIntermediate=(obj)=>{
    this.setState({
      goals:this.state.goals.map((goal)=>{
        if (goal.id === obj.goalId){
          return Object.assign({},goal,{
            intermediates: goal.intermediates.filter(intermediate=> intermediate.id !== obj.intermediateId)
          });
        }else{
          return goal
        }
      })
    });

    axiosConfig.delete(`/intermediate/${obj.intermediateId}/`)
      .then(response=>console.log("response",response))
      .catch(error=>console.log("error",error));
  };


  updateTimeSpent=(obj)=>{
    console.log('update timer')
    console.log(obj)
    this.setState({
      goals:this.state.goals.map((goal)=>{
        if (goal.id === obj.goalId){
          return Object.assign({},goal,{
            intermediates: goal.intermediates.map((intermediate)=>{
              if (intermediate.id == obj.intermediateId){
                return Object.assign({},intermediate,{
                  timeSpent: intermediate.timeSpent+obj.timeSpent
                });
              }else{
                return intermediate
              }
            })
          });
        }else{
          return goal
        }
      })
    });
  };

  updateIntermediate=(obj)=>{
    console.log(obj)
    this.setState({
      goals:this.state.goals.map((goal)=>{
        if (goal.id === obj.goalId){
          return Object.assign({},goal,{
            intermediates: goal.intermediates.map((intermediate)=>{
              if (intermediate.id == obj.intermediateId){
                return Object.assign({},intermediate,{
                  title: obj.title,
                  totalTime: obj.totalTime
                });
              }else{
                return intermediate
              }
            })
          });
        }else{
          return goal
        }
      })
    });

    axiosConfig.patch(`/intermediate/${obj.intermediateId}/`,{title:obj.title})
      .then(response=>console.log("response",response))
      .catch(error=>console.log("error",error));
  };


  createBranch = (obj) =>{
    const newBranch = {
      id: uuid(),
      title: obj.title,
    }

    this.setState({
      goals:this.state.goals.concat({
          ...newBranch,
          intermediates:[]
      })
    });

    axiosConfig.post("/goal/",newBranch)
      .then(response=>console.log("response",response,this.state))
      .catch(error=>console.log("error",error))
      ;
  };



  addIntermediate=(obj)=>{
    console.log(obj)
    const newIntermediate = {
      id:uuid(),
      goalId: obj.goalId,
      title: obj.title,
      totalTime: 0,
      timeSpent:0,
    }

    this.setState({
      goals: this.state.goals.map((goal)=>{
        if (goal.id === obj.goalId){
          return Object.assign({},goal,{
            intermediates: goal.intermediates.concat(newIntermediate)
          });
        }else{
          return goal;
        }
      })
    });

    axiosConfig.post("/intermediate/",newIntermediate)
      .then(response=>console.log(response))
      .catch(error=>console.log(error));
  }


  openTimer =(obj) =>{
      console.log('opentimer')
      this.setState({
        timerOn:true,
        activeTitle:obj.title,
        activeGoalId:obj.goalId,
        activeIntermediateId:obj.intermediateId,
      });
  }

  closeTimer =()=>{
    this.setState({timerOn:false});
  }

  render(){
    const toRender= !this.state.timerOn ?
      <BranchTable
        {...this.state}
        deleteGoal={this.deleteGoal}
        updateGoal={this.updateGoal}
        deleteIntermediate={this.deleteIntermediate}
        updateIntermediate={this.updateIntermediate}
        openTimer={this.openTimer}


        handleCreateBranch = {this.createBranch}
        addIntermediate = {this.addIntermediate}
      />:
      <TimerDashboard
        title={this.state.activeTitle}
        goalId={this.state.activeGoalId}
        intermediateId={this.state.activeIntermediateId}
        closeTimer={this.closeTimer}
        updateTimeSpent={this.updateTimeSpent}
      />;

    return(
      <div className='ui container'>
        <Header />
        <Toolbar />
        {toRender}
      </div>
    );
  }
}


export default PlanDashboard
