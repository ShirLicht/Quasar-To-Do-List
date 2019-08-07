<template>
  <q-page class="q-pa-md">

    <p>Todos List</p>
      <q-list separator borderd>

      <Task
       v-for="(task, key) in tasks"
       :key="key"
       :task="task"
       :id="key"></Task>

    </q-list>

  </q-page>
</template>


<script>

import {mapGetters} from 'vuex';


export default {
   name: 'PageToDo',
   components:{
     'Task' : require('components/Tasks/Task.vue').default
   },
   computed : {
     /*tasks() {
       //get the tasks array from the store-tasks module
       return this.$store.getters['tasks/tasks']
     }*/
     ...mapGetters('tasks', ['tasks'])
   }
    
}
</script>

<style>
</style>
