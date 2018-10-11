import React, {Component} from 'react'
import { connect } from 'react-redux'
import {setVisibilityFilter} from '../actions/index'

class FilterLink extends Component {
  render() {
    const {value, filter,onclick} = this.props
    return (
      // <a href = '' onClick={e=>{e.preventDefault(), this.props.onClick()}}> {value}</a> 
      <button onClick={()=>onclick()}>{value}</button>
    );
  }
}
const mapStateToProps = (state,ownProps) => {
  console.log(123456)
  console.log(state)
  console.log(ownProps)
  return {
   active:ownProps.filter === state.visibilityFilter 
  
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onclick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}





     FilterLink= connect(
     mapStateToProps,
     mapDispatchToProps
   )(FilterLink)
export default FilterLink;
