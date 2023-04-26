<template>
  <div class="todo-form">
    <input 
      type="text"
      placehoder="please try input todo something..."
      v-model="todoText"
    />
    <button @click="addTodoText">ADDTODO</button>
  </div>
</template>
<script setup>
  import { ref, inject } from 'vue';
  const { addTodo } = inject('todoListMethods');
  const todoText = ref('');
  const addTodoText = () => {
    const value = todoText.value.trim();
    if (value.length > 0) {
      addTodo(value);
      todoText.value = '';
    }
  }
</script>