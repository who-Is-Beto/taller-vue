<template>
  <div class="add-container global-components">
    <h2>Task list</h2>
    <button>+</button>
  </div>
</template>

<script>
export default {
  AddTask: {
    name: "AddTask"
  }
};
</script>

<style scoped>
.add-container {
  background-color: var(--secondary);
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
}

button:hover {
  background-color: var(--primary);
  transform: rotate(360deg);
  color: var(--quinary);
}

button:active {
  transform: scale(0.75);
}
</style>
