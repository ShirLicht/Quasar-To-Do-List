<template>
     <q-item
       @click="updateTask({id: id, updates: {completed: !task.completed}})"
       clickable
       v-ripple
       :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'">

          <q-item-section side top>
            <q-checkbox v-model="task.completed" />
          </q-item-section>

          <q-item-section>
            <q-item-label :class="{'text-strikethrough' : task.completed }">
                {{task.name}}
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="task.dueDate" side>

            <div class="row">

                <div class="column justify-center">

                  <q-icon name="event" size="18px" class="q-mr-xs" />
              
                </div>

                <div class="column">

                    <q-item-label class="row justify-end" caption>
                        {{task.dueDate}}
                    </q-item-label>

                    <q-item-label  class="row justify-end" caption>
                        <small>{{task.dueTime}}</small>
                    </q-item-label>

                </div>

            </div>

          </q-item-section>
        
          <q-item-section side>

              <div class="row">

                <q-btn flat round dense color="primary" icon="edit" @click.stop="showEditTask = true"/>

                <q-btn flat round dense color="red" icon="delete" @click.stop="promptToDelete(id)"/>
              
              </div>
          </q-item-section>

          <q-dialog v-model="showEditTask">

                <Edit-Task @closeModal="showEditTask = false" :task="task" :id="id" />

          </q-dialog>

      </q-item>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    props: ['task', 'id'],
    data(){
       return {
           showEditTask : false
       } 
    },
    methods: {
        //mapping an action to the component
        ...mapActions('tasks', ['updateTask', 'deleteTask']),
        promptToDelete(id){
           this.$q.dialog({
               title:'Confirm',
               message:'Are you sure you want to delete the task?',
               ok: {
                   push: true
               },
               cancel: {
                   color: 'negative'
               },
               presistent: true
           }).onOk(() => {
               this.deleteTask(id)
           }) 
        }
    },
    components: {
        "Edit-Task": require('components/Tasks/Modals/EditTask.vue').default
    }
}
</script>

<style lang="scss">

</style>

