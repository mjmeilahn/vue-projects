<template>
  <div id="app">
    <h1 class="text-center">Todo</h1>
    <TodoForm
      @addTodoItem="addTodoItem"
      :todo="todo"
    />

    <div v-if="todoItems.length > 0">
      <TodoList
        :todoItems="todoItems"
        @removeTodoList="removeTodoList"
        @removeTodoItem="removeTodoItem"
        @editTodoItem="editTodoItem"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  data() {
    return {
      todoItems: [],
      todo: {
        id: undefined,
        text: '',
        priority: {},
      },
    }
  },
  mounted() {
    if (localStorage.getItem('todoItems')) {
      try {
        this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
      } catch(e) {
        localStorage.removeItem('todoItems');
      }
    }
  },
  methods: {
    addTodoItem(todo) {
      const { id, text, priority } = todo
      const matchIndex = this.todoItems.findIndex(i => i.id === id)

      if (matchIndex === -1) {
        this.todoItems.push({
          id,
          text,
          priority,
        })
        console.log('Added: ' + text, priority.text, id)
        this.showToast('Todo item saved!')
      }
      else {
        let item = this.todoItems[matchIndex]
        item.text = text
        item.priority = priority
        console.log('Edited: ' + text, priority.text, id)
        this.showToast('Todo item edited!')
      }

      this.setTodoLocalStorage()
    },
    removeTodoItem(index) {
      this.todoItems.splice(index, 1)
      this.setTodoLocalStorage()
      this.showToast('Todo item removed.')
    },
    removeTodoList() {
      this.todoItems = []
      this.setTodoLocalStorage()
      this.showToast('Todo list removed.')
    },
    editTodoItem(index) {
      const item = this.todoItems[index]
      const { id, text, priority } = item

      this.todo = {
        id,
        text,
        priority,
      }

      console.log('Editing: ' + text, priority.text, id)
      this.showToast('You can now edit this todo in the form.')
    },
    showToast(message) {
      this.$bvToast.toast(message, {
        title: 'Update',
        variant: 'success',
        solid: true
      })
    },
    setTodoLocalStorage() {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems))
    }
  },
  components: {
    TodoForm,
    TodoList,
  }
}
</script>

<style>
#app {
  margin: 50px auto;
  max-width: 700px;
}
</style>
