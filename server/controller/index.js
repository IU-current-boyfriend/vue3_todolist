const {
  readFileSync,
  writeFileSync
} = require('fs');

const {
  resolve
} = require('path');

/**
 * [
 *  {
 *     id: new date,
 *     text: xxx,
 *     completed: false
 *  }
 * ]
 * 
 */
const GetTodoListController = (req, res, next) => {
  const todoData = readFile();
  res.send({
    err_code: 0,
    err_msg: 'ok',
    data: todoData
  });
};


const AddTodoController = (req, res, next) => {
  console.log('query: =>', req.query);
  console.log('body: =>', req.body);
  const todo = req.body;
  // 首先读取文件,然后操作数据,最后再写入文件。
  const todoData = readFile();
  // 操作数据
  todoData.push(todo);
  // 写入文件
  writeFile(todoData);
  // 返回数据
  res.send({
    err_code: 0,
    err_msg: 'ok',
    data: null
  });
}; 

const ToggleTodoController = (req, res, next) => {
  const id = req.body.id;
  // 读取文件
  let todoData = readFile();
  // 操作数据
  todoData = todoData.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    };
    return todo;
  });
  // 写入数据
  writeFile(todoData);
  // 返回数据
  res.send({
    err_code: 0,
    err_msg: 'ok',
    data: null
  })
};

const RemoveTodoController = (req, res, next) => {
  const id = req.body.id;
  // 读取文件
  let todoData = readFile();
  // 操作数据
  todoData = todoData.filter(todo => todo.id !== id);
  // 写入数据
  writeFile(todoData);
  // 返回数据
  res.send({
    err_code: 0,
    err_msg: 'ok',
    data: null
  })
};

const writeFile = content => {
  writeFileSync(resolve('data/data.json'), JSON.stringify(content));
};

const readFile = () => {
  return JSON.parse(readFileSync(resolve('data/data.json'), 'utf-8') || '[]');
};

module.exports = {
  GetTodoListController,
  AddTodoController,
  ToggleTodoController,
  RemoveTodoController
}