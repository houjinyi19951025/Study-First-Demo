
import { combineReducers } from 'redux'
const defaultState = {
    count :9999,
    city:'上海'
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log(action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return  state.map(item=>{
        console.log(item.completed)
          return (item.id === action.id)?{...item,completed: !item.completed}:item
       })
           default:
           return state
       }
   }
    const visibilityFilter = (state = 'SHOW_ALL', action) => {
      switch (action.type) {
       case 'SET_VISIBILITY_FILTER':
         return action.filter
       default:
          return state
  }
}

  export const reducer = combineReducers({
        todos,
        visibilityFilter
   })
