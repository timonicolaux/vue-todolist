<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      tasks: [
        { name: "task one", status: "to-do" },
        { name: "task two", status: "finished" },
      ],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.task.length === 0) return;
      if (this.editedTask === null) {
        this.tasks.push({ name: this.task, status: "to-do" });
        this.task = "";
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
        this.task = "";
      }
    },
    deleteTask(index) {
      this.task = "";
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    updateStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) {
        this.tasks[index].status = this.statuses[0];
      } else {
        this.tasks[index].status = this.statuses[newIndex];
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="flex justify-center mt-20">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
    </div>

    <div class="flex justify-center mt-10">
      <div class="relative w-2/5">
        <form action="post" @submit="onSubmit(e)">
          <input
            type="text"
            class="py-2 px-4 text-black rounded-sm w-full"
            v-model="task"
          />
          <button
            class="bg-gray-400 rounded-r-sm text-white font-bold py-2 px-4 absolute right-0"
            @click="onSubmit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center m-auto mt-20">
      <table
        class="bg-white text-black text-left w-1/2 min-w-[500px] table-fixed"
      >
        <thead>
          <tr class="bg-gray-300 text-center">
            <th class="border px-8 py-4 font-bold">Task</th>
            <th class="border px-8 py-4 font-bold">Satus</th>
            <th class="border px-8 py-4 font-bold w-28">Edit</th>
            <th class="border px-8 py-4 font-bold w-28">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td class="border px-8 py-4">{{ task.name }}</td>
            <td
              class="border px-8 py-4 cursor-pointer"
              @click="updateStatus(index)"
            >
              {{ task.status }}
            </td>
            <td class="border px-8 py-4 text-center">
              <font-awesome-icon
                icon="fa-solid fa-pen-to-square"
                @click="editTask(index)"
                class="cursor-pointer"
              />
            </td>
            <td class="border px-8 py-4 text-center">
              <font-awesome-icon
                icon="fa-solid fa-trash"
                @click="deleteTask(index)"
                class="cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h1
        v-if="!tasks.length"
        class="text-center px-8 py-4 bg-white text-black w-1/2 min-w-[500px]"
      >
        Please add a new task
      </h1>
    </div>
  </div>
</template>

<style scoped></style>
