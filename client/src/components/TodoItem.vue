<template>
  <li>
    <input 
      type="checkbox"
      :checked="todo.completed"  
      @change="toggleTodo(todo.id)"
    />
    <span
      :class="{ 'completed': todo.completed }"
    >
      {{ todo.todo }}
    </span>
    <button @click="removeTodo(todo.id)">REMOVETODO</button>
  </li>
</template>
<script setup>
  import { inject } from 'vue';
  const props = defineProps({
    todo: {
      type: Object,
      default: () => ({})
    }
  });
  const {
    toggleTodo,
    removeTodo
  } = inject('todoListMethods');
</script>