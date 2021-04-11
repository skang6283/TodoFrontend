import React, { Component } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import PropTypes from 'prop-types';
import { Link,Redirect } from 'react-router-dom';

import Header from '../Header/Header'
import Toolbar from '../Toolbar/Toolbar'

class Signup extends Component {
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
          password1:true,
        },
        valid: false,
        touched: false,
      },
      password2:{
        elementType: 'input',
        elementConfig:{
          type: 'password',
          placeholder: 'Verify Password'
        },
        value:'',
        validation:{
          required:true,
          minLength:6,
          verifyPassword:true,
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

    if (rules.verifyPassword){
      isValid = value === this.state.controls.password.value && isValid;
    }

    if(rules.password1){
      console.log('hi')
    }else{
      console.log('123')
    }




    return isValid;
  }

  inputChangedHandler=(event, controlName)=>{
    let updatedControls = null
    if (controlName==='password'){
      updatedControls ={
        ...this.state.controls,
        [controlName]:{
          ...this.state.controls.[controlName],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched:true
        },
        ['password2']:{
          ...this.state.controls['password2'],
          valid: this.state.controls['password2'].value===event.target.value,
        },


      };
      this.setState({controls: updatedControls});


    } else {
      updatedControls ={
        ...this.state.controls,
        [controlName]:{
          ...this.state.controls[controlName],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched:true
        }
      };
    }
    this.setState({controls: updatedControls});

  }


  submitHandler=(event)=>{
    event.preventDefault();
  }



  render(){
    const formElementsArray=[];
    let valid = true;

    for ( let key in this.state.controls){
      formElementsArray.push({
        id:key,
        config:this.state.controls[key],
      });

      valid = (this.state.controls[key].valid) && valid;
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


    return (
      <div className='ui container'>
        <Header />
        <Toolbar />
          <div className='ui three column centered grid'>
            <div className='ui column'>
              <div className='ui attached segment'>

                <form className='ui form' onSubmit={this.submitHandler}>
                  {form}
                  <Button
                    btnType='teal'
                    disabled={!valid}>
                    Submit
                  </Button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Signup
