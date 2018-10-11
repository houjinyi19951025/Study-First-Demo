
import React, {Component} from 'react'
import FilterLink from '../contains/FilterLink'
class Count extends Component {
  render() {
    return (
      <div>
       <FilterLink value='All' filter="SHOW_ALL"/>
        {' -----'}
       <FilterLink value='Active' filter="SHOW_ACTIVE"/>
        {'------ '}
       <FilterLink value='Completed' filter="SHOW_COMPLETED"/>
       
      </div>
    );
  }
}

export default Count;
