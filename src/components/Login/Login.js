import React, { Component } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import PropTypes from 'prop-types';
import { Link,Redirect } from 'react-router-dom';

import Header from '../Header/Header'
import Toolbar from '../Toolbar/Toolbar'

class Login extends Component {
  state={
    controls:{
      email:{
        elementType: 'input',
        elementConfig:{
          type: 'email',
          placeholder: 'Email'
        },
        value:'',
        validation:{
          required:true,
          isEmail: true,
        },
        valid: false,
        touched: false
      },
      password:{
        elementType: 'input',
        elementConfig:{
          type: 'password',
          placeholder: 'password'
        },
        value:'',
        validation:{
          required:true,
          minLength:6,
        },
        valid: false,
        touched: false,
      }
    },
    isSignup:false,
  }

  checkValidity=(value,rules)=>{
    let isValid = true;

    if ( !rules ) {
      return true;
    }

    if (rules.required){
      isValid = value.trim() && isValid;
    }

    if (rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength){
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail){
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test( value ) && isValid
    }

    if (rules.isNumeric){
      const pattern = /^\d+$/;
      isValid = pattern.test(value)&&isValid;
    }
    return isValid;
  }

  inputChangedHandler=(event, controlName)=>{
    const updatedControls ={
      ...this.state.controls,
      [controlName]:{
        ...this.state.controls.[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched:true
      }
    };

    this.setState({controls: updatedControls});
  }

  handleSignupClick=()=>{
    console.log('sd')
    this.setState(prevState =>{
      return {isSignup: !prevState.isSignup};
    });
  }




  render(){
    const formElementsArray=[];
    for ( let key in this.state.controls){
      formElementsArray.push({
        id:key,
        config:this.state.controls[key],
      });
    }

    let form = formElementsArray.map( formElement =>(
      <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event)=> this.inputChangedHandler(event, formElement.id)}
      />
    ));


    let loginRedirect=null;
    if (this.state.isSignup){
      loginRedirect = <Redirect to='/signup' />
    }


    return (
      <div className='ui container'>
        <Header />
        <Toolbar />
          <div className='ui three column centered grid'>
            <div className='ui column'>
              <div className='ui attached segment'>
                {loginRedirect}
                <form className='ui form' onSubmit={this.submitHandler}>

                  {form}
                  <Button
                    btnType='green'>
                    Login
                  </Button>
                </form>

              </div>
              <Button
                btnType='bottom attached'
                clicked={this.handleSignupClick}
                icon='signup icon'
              >
                SignUp
              </Button>

            </div>

          </div>


    </div>



    );
  }
}
export default Login
