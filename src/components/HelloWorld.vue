<template>
  <div class="hello">
    <div class="container">
      <br>
      <div class="form-inline" action="#">
        <input type="text" id="form-name" v-model="item.name" placeholder="Name" class="form-control"> 
        <input type="text" v-model="item.desc" placeholder="Description" class="form-control" v-on:keyup.enter="addItem">
        <button @click="addItem" class="btn btn-dark"><i class="fas fa-plus"></i></button>
      </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>Name</th>
          <th>Description</th>
          <th class="col-2">Edit/Del</th>
        </thead>
        <tr v-for="(item, index) in items">
          <td>
            <input v-if="item.edit" type="text" v-model="item.name"  v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.name}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.desc" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.desc}} </span>
          </td>
          <td><button @click="item.edit = !item.edit" class="btn btn-info"><i class="far fa-edit"></i></button>
            <button @click="removeItem(index)" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetales' },
      { id: 1, text: 'Queso' },
      { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
    ]
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
