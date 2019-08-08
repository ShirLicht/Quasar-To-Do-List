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

    <div class="absolute-bottom text-center q-mb-lg" >

      <q-btn 
      @click="showAddTask = true"
      round
      color="primary"
      size="24px"
      icon="add"/>

    </div>

    <q-dialog v-model="showAddTask">
      <Add-Task @closeModal="showAddTask = false" />
    </q-dialog>

  </q-page>
</template>


<script>

import {mapGetters} from 'vuex';


export default {
   name: 'PageToDo',
   components:{
     'Task' : require('components/Tasks/Task.vue').default,
     'Add-Task' : require('components/Tasks/Modals/AddTask.vue').default
   },
   computed : {
     /*tasks() {
       //get the tasks array from the store-tasks module
       return this.$store.getters['tasks/tasks']
     }*/
     ...mapGetters('tasks', ['tasks'])
   },
   data(){
     return{
       showAddTask: false
     }
   }
    
}
</script>

<style>
</style>
