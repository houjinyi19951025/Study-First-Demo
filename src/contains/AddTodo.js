
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addTodo} from '../actions/index'

class AddTodo extends Component {
  inputClick = (dispatch )=>{
      const inputValue = this.refs.DomInput.value.trim()
       if(inputValue===''){
          return
      }
      dispatch(addTodo(inputValue))
      this.refs.DomInput.value =''
      console.log(inputValue)
  }
  render() {
      console.log(this.props)
    return (
      <div >
       <input ref='DomInput' />
       {'  '} 
       <button onClick={()=>this.inputClick(this.props.dispatch)}>AddTodo </button>
      </div>
    );
  }
}
AddTodo = connect()(AddTodo)
export default AddTodo;

