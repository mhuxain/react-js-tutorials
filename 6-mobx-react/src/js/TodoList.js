import React from "react"
import { observer } from "mobx-react"
import {action} from 'mobx';

@observer
export default class TodoList extends React.Component {
  constructor() {
    super();
    this.fetch();
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }

  @action fetch() {


    window.fetch("http://api.fixer.io/latest")
    .then(res => {
      console.log("got json")
      return res.json();
    })
    .then(json => this.props.store.ex = json);
  }



  render() {
    const { filter, filteredTodos, todos, ex } = this.props.store;
    // let rates = ex.rates || {};

    const todoList = Object.keys(ex.rates).map(
      (todo, i) => (
        <li key={i}>{todo}, {ex.rates[todo]}</li>
      )
    );

    return(
      <div>
        <h1>MobX2</h1>
        <b>{filter}</b><br></br>
        <input className="filter" value={filter} onChange={this.filter.bind(this)}></input>
        <ul>
            {todoList}

        </ul>
        <b>
          <i></i>
        </b>

        <input></input>

      </div>);

  }
}
