import {
  httpGet,
  httpPost
} from '../service/http';

const getTodoList = () => {
  return httpGet('/get_todo_list');
};

const addTodo = todo => {
  return httpPost('/add_todo', todo);
};

const toggleTodo = id => {
  return httpPost('/toggle_todo', { id });
};

const removeTodo = id => {
  return httpPost('/remove_todo', { id });
};

export {
  getTodoList,
  addTodo,
  toggleTodo,
  removeTodo
}
