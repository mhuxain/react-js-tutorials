import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const { filter, filteredTodos, todos } = this.props.store;

    const todoList = filteredTodos.map(
      (todo, i) => (
        <li key={i}>{todo}</li>
      )
    );

    return(
      <div>
        <h1>MobX2</h1>
        <b>{filter}</b><br></br>
        <input classname="filter" value={filter} onChange={this.filter.bind(this)}></input>
        <ul>
            {todoList}

        </ul>

      </div>);

  }
}
