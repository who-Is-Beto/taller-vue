<template>
  <div class="list-item">
    <p>ahahah</p>
    <button>d</button>
  </div>
</template>

<script>
export default {
  name: "ListItem"
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
}

button {
  background-color: var(--danger);
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  transform: rotate(360deg);
}

button:active {
  transform: scale(0.75);
}
</style>
