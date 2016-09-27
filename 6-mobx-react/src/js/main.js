import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"

import TodoList from "./TodoList"
import TodoStore from "./TodoStore"

Object.map = function(o, f, ctx) {
  ctx = ctx || this;
  var result = {};
  Object.keys(o).forEach(function(k) {
      result[k] = f.call(ctx, o[k], k, o);
  });
  return result;
}

const app = document.getElementById("app")

ReactDOM.render(<TodoList store={TodoStore} />, app)
