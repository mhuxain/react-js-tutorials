import { computed, observable } from "mobx";

class TodoStore {
  @observable todos = ["by milk", "buy eggs", "buy apples"];
  @observable filter = "";

  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i", )
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
  }
}

export default new TodoStore;
