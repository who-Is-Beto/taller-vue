<template>
  <div class="list-item">
    <p>{{ task.task }}</p>
    <button @click="deleteTask(task)"><i class="fas fa-trash-alt"></i></button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTask(task) {
      this.$emit('delete-task', task);
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  width: 95%;
  background-color: var(--quaternary);
  border-radius: 0.5rem;
  border: 2px solid var(--quinary);
}

button {
  background-color: var(--danger);
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid var(--quinary);
}

button:hover {
  transform: rotate(360deg);
}

button:active {
  transform: scale(0.75);
}
</style>
