<template>
  <div id="app">
    <add-task @add-task="createTask" />
    <task-list />
  </div>
</template>

<script>
import TaskList from "./components/taskLIst/TaskLIst.vue";
import AddTask from "./components/addTask/AddTask.vue";
import { Store, setTask } from "@/store/Store";

export default {
  name: "App",
  components: {
    TaskList,
    AddTask
  },
  methods: {
    createTask(task) {
      console.log("store", Store.tasks);
      setTask(task);
      console.log("store", Store.tasks);
    }
  }
};
</script>

<style>
:root {
  --primary: #2a374a;
  --secondary: #808097;
  --tertiary: #cabcd9;
  --quaternary: #e7dae7;
  --quinary: #0c2724;
  --danger: #ff5252;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
  transition: all 0.2s ease-in-out;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 3rem;
  background-color: var(--secondary);
}

#app {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.global-components {
  background-color: var(--secondary);
  padding: 1rem;
  width: 90%;
  border-radius: 1rem;
  border: 2px solid var(--quinary);
}
</style>
