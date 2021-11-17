<template>
  <div id="app">
    <add-task />
    <task-list />
  </div>
</template>

<script>
import TaskList from "./components/taskLIst/TaskLIst.vue";
import AddTask from "./components/addTask/AddTask.vue";

export default {
  name: "App",
  components: {
    TaskList,
    AddTask
  }
};
</script>

<style>
:root {
  --primary: #392833;
  --secondary: #524652;
  --tertiary: #7d716d;
  --quaternary: #bfaca6;
  --quinary: #f6e8ea;
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
  background-color: var(--primary);
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
  padding: 1rem;
  width: 90%;
  border-radius: 1rem;
}
</style>
