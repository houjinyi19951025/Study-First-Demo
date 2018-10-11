

import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import {toggleTodo} from '../actions/index'

const getVisibleTodos = (todos,filter) =>{
      switch(filter){
        case 'SHOW_ACTIVE':
        return todos.filter(t=>!t.completed)
        case 'SHOW_COMPLETED':
        return todos.filter(t=>t.completed)
      default:
        return todos
      }
   }
const mapStateToProps = state =>{
    console.log(state)
    return {
        addTodo:getVisibleTodos(state.todos, state.visibilityFilter)

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onTodoClick:id =>{
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
