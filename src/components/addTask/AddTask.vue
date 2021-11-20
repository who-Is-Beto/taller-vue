<template>
  <div class="add-container global-components">
    <h2>Task list</h2>
    <input type="text" v-model="taskValue" placeholder="Write your new task" />
    <button @click="addTask">+</button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      taskValue: ""
    };
  },
  methods: {
    addTask() {
      if (this.taskValue === "") {
        alert("Please add a task");
      } else {
        this.$emit("add-task", this.taskValue);
        this.taskValue = "";
      }
    }
  }
};
</script>

<style scoped>
.add-container {
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

p {
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
}

button {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  padding: 0.35rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--quaternary);
  border: 2px solid var(--quinary);
}

button:hover {
  background-color: var(--primary);
  transform: rotate(360deg);
  color: var(--quaternary);
  -webkit-tap-highlight-color: transparent;
}

button:active {
  transform: scale(0.75);
}

input {
  width: 90%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--tertiary);
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary);
  outline: none;
  border: 2px solid var(--primary);
  margin: 0.5rem 0;
}

input::placeholder {
  color: var(--primary);
}
</style>
