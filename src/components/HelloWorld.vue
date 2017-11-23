<template>
  <div class="hello">
    <h1>TODO:</h1>
    <ol>
      <li v-for="(todo, i) in todos">
        {{ todo }}
        <button v-on:click="remove(i)">Delete</button>
      </li>
    </ol>
    <input v-model="new_todo">
    <button v-on:click="add">Add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      todos: [],
      new_todo: ''
    }
  },
  methods: {
    add: function () {
      this.todos.push(this.new_todo)
      this.new_todo = ''
    },
    remove: function (i) {
      this.todos.splice(i, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: decimal;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
