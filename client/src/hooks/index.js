/**
 * hooks按照需求的话，需要实现哪些接口呢？
 * 1. 获取getTodoList列表
 * 2. 增加addTodo
 * 3. 切换todo状态
 * 4. 删除todo
 * 5. 计算todoList列表长度
 * 6. 当操作发生变化时，需要打印日志
 * 
 */
import { ref, watchEffect, watch, computed } from 'vue';
import {
  getTodoList,
  addTodo as addTodoHttp,
  removeTodo as removeTodoHttp,
  toggleTodo as toggleTodoHttp
} from '../api/index';
const useTodoListHook = () => {
  const todoData = ref([]);
  const count = computed(() => todoData.value.length);
  const type = ref('');
  const getTodo = async () => {
    // console.log('getTodo:=>', await getTodoList());
    todoData.value = await getTodoList();
  };

  const addTodo = async todoText => {
    // 组装todo
    const todo = {
      id: new Date().getTime(),
      todo: todoText,
      completed: false
    };
    // 改变类型
    type.value = 'addTodo';
    // 调用api接口，发起请求
    await addTodoHttp(todo);
    // 改变本地数据
    todoData.value.push(todo);
  };
  const toggleTodo = async id => {
    // 修改类型
    type.value = 'toggleTodo';
    console.log('id: =>', id);
    // 发起请求，调用接口
    await toggleTodoHttp(id);
    // 处理本地数据
    todoData.value = todoData.value.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      };
      return todo;
    })
  };
  const removeTodo = async id => {
    // 修改类型
    type.value = 'removeTodo';
    // 发起请求，调用接口
    await removeTodoHttp(id);
    // 处理本地数据
    todoData.value = todoData.value.filter(todo => todo.id !== id);
  };
  // 当数据发生变化的时候，要重新进行发起请求，获取最新的数据信息
  watchEffect(getTodo);
  // 监听type类型变化，打印日志
  watch (type, newValue => {
    console.log(`操作行为: => ${ type }, 操作后的值: => ${ newValue }`);
  });
  return {
    todoData,
    count,
    addTodo,
    removeTodo,
    toggleTodo
  }
};

export {
  useTodoListHook
}