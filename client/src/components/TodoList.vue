<template>
  <div class="todo-container">
    <todo-title
      :count="count"
    ></todo-title>
    <todo-form></todo-form>
    <todo-lists
      :todo-data="todoData"
    ></todo-lists>
  </div>
</template>
<script setup>
  import {
    provide
  } from 'vue';
  import {
    useTodoListHook
  } from '../hooks';
  import TodoTitle from './TodoTitle.vue';
  import TodoLists from './TodoLists.vue';
  import TodoForm from './TodoForm.vue';
  const {
    todoData,
    count,
    addTodo,
    removeTodo,
    toggleTodo
  } = useTodoListHook();

  provide('todoListMethods', {
    addTodo,
    removeTodo,
    toggleTodo
  });
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
