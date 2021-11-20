<template>
  <div class="global-components">
    <h3 v-if="tasks.length === 0">There's no tasks yet :c</h3>
    <ul v-if="tasks.length > 0" class="list-container">
      <li v-for="task in tasks" v-bind:key="task.id">
        <ListItem @delete-task="handleDeleteTask" :task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '../listItem/LIstItem.vue';
import { Store, deleteTask } from '@/store/Store';

export default {
  name: 'TaskList',
  components: {
    ListItem
  },
  data() {
    return {
      tasks: Store.tasks
    };
  },
  methods: {
    handleDeleteTask(task) {
      deleteTask(task);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  min-height: 60vh;
  width: 100%;
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

h3 {
  text-align: center;
  margin: 4rem 0;
}
</style>
