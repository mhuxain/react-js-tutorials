import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {

  Todos = this.props.store;

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const { filter, filteredTodos, todos, clearComplete } = this.props.store;
    const todoList = filteredTodos.map(
      (todo, i) => (
        <li key={todo.id}>{todo.value}
          <input type="checkbox" value={todo.complete} onChange={this.toggleComplete.bind(this, todo) } checked={todo.complete} />
          <input type="button" onClick={() => this.Todos.delete(todo) } value="X" />
        </li>
      )
    );

    return(
      <div>
        <h1>MobX2</h1>
        <b>{filter}</b><br></br>
        Create new: <input className="create" ref="createNewInput"  />
      <button onClick={(e) => {this.Todos.create(this.refs.createNewInput.value); this.refs.createNewInput.value = "";}}>Create</button><br /><br />
        Search: <input className="filter" value={filter} onChange={(e) => this.filter(e)} /> <br />
        <ul>
            {todoList}

        </ul>
        <button onClick={clearComplete}>Clear Complete</button>

      </div>);

  }
}

export class Menu extends React.Component {

  Todos = this.props.store;

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const { filter, filteredTodos, todos, clearComplete } = this.props.store;
    const todoList = filteredTodos.map(
      (todo, i) => (
        <li key={todo.id}>{todo.value}
          <input type="checkbox" value={todo.complete} onChange={this.toggleComplete.bind(this, todo) } checked={todo.complete} />
          <input type="button" onClick={() => this.Todos.delete(todo) } value="X" />
        </li>
      )
    );

    return(
      <div>
        <h1>MobX2</h1>
        <b>{filter}</b><br></br>
        Create new: <input className="create" ref="createNewInput"  />
      <button onClick={(e) => {this.Todos.create(this.refs.createNewInput.value); this.refs.createNewInput.value = "";}}>Create</button><br /><br />
        Search: <input className="filter" value={filter} onChange={(e) => this.filter(e)} /> <br />
        <ul>
            {todoList}

        </ul>
        <button onClick={clearComplete}>Clear Complete</button>

      </div>);

  }
}
