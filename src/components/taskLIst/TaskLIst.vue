<template>
  <ul class="global-components list-container">
    <li v-for="task in tasks" v-bind:key="task.id">
      <ListItem />
    </li>
  </ul>
</template>

<script>
import ListItem from "../listItem/LIstItem.vue";

export default {
  name: "TaskList",
  components: {
    ListItem
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description 1",
          done: false
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description 2",
          done: false
        },
        {
          id: 3,
          title: "Task 3",
          description: "Description 3",
          done: false
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  background-color: var(--secondary);
  min-height: 60vh;
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
