const { Router } = require('express');
// 设置参数解析器
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
// bodyParser.urlencoded({ extended: true })

const {
  GetTodoListController,
  AddTodoController,
  ToggleTodoController,
  RemoveTodoController
} = require('../controller');
const router = new Router();

/**
 * 1. getTodoList 
 * 2. addTodo
 * 3. toggleTodo
 * 4. removeTodo
 */

router.get('/get_todo_list', GetTodoListController);
router.post('/add_todo', jsonParser, urlencodedParser, AddTodoController);
router.post('/toggle_todo', jsonParser, urlencodedParser, ToggleTodoController);
router.post('/remove_todo', jsonParser, urlencodedParser, RemoveTodoController);

module.exports = router;