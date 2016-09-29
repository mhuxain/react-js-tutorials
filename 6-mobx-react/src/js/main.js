import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"

import TodoList from "./TodoList"
import TodoStore from "./TodoStore"

function el(id) { return document.getElementById( id ); }

const app = el("app")
const menu = el("menu")


ReactDOM.render(<TodoList store={TodoStore} />, menu)
ReactDOM.render(<TodoList store={TodoStore} />, app)
