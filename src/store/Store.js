import Vue from 'vue';
let count = 0;

const Store = Vue.observable({
  tasks: []
});

const setTask = (task) => {
  Store.tasks.push({
    id: count++,
    task: task
  });
};

const deleteTask = (taskId) => {
  console.log(taskId);
  // Store.tasks.filter((task) => task.id !== taskId);
  console.log(Store.tasks.splice(taskId, 1));
};

export { Store, setTask, deleteTask };
