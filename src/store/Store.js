import Vue from "vue";

const Store = Vue.observable({
  tasks: []
});

const setTask = (task) => {
  Store.tasks.push(task);
};

export { Store, setTask };
