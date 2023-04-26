<template>
  <div class="todo-lists">
    <ul class="lists">
      <todo-item
        v-for="todo of todoData"
        :key="todo.id"
        :todo="todo"
      ></todo-item>
    </ul>
  </div>
</template>

<script setup>
  import TodoItem from './TodoItem.vue';
  const props = defineProps({
    todoData: {
      type: Array,
      default: () => []
    }
  });
</script>