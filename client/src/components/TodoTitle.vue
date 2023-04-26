<template>
  <div class="count"> {{ count }} </div>
</template>

<script setup>
  const props = defineProps({
    count: {
      type: Number,
      default: () => 0
    }
  })
</script>