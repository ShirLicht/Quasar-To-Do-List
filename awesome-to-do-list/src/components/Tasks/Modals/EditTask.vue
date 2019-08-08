<template>
  <q-card>
    
        <Modal-Header>Edit a Task</Modal-Header>

        <!--form: using 'prevent' in order to prevent the default action of the event -->
        <form @submit.prevent="submitForm">
             <q-card-section>
             <!--input: task's name -->
                <Modal-Task-Name :name.sync="taskToSubmit.name" ref="modalTaskName"/>
   

             <!--input: task's due date -->
                <Modal-Task-Due-Date :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"/>

            <!--input: task's due time -->
            <!-- show it only if a due date was entered -->
                <Modal-Task-Due-Time :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>

            </q-card-section>

            <Modal-Buttons/>
           
        </form>

       

  </q-card>    
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: ['task', 'id'],
    data(){
        return{
            taskToSubmit: {
            }
        }
    },
    methods: {

       //map the 'updateTask' action from the tasks store module to this component
       ...mapActions('tasks', [ 'updateTask']),
        submitForm() {
          
          //fire the validate method on the 'name' text input
          //1st ref - this component
          //2nd ref - child component
          this.$refs.modalTaskName.$refs.name.validate();

        //check if the input it ok - there is no error in the validtion of the input
          if(!this.$refs.modalTaskName.$refs.name.hasError){
            this.submitTask()
          }

        },

        submitTask(){
            //send the updated task to the app's storage
            this.updateTask({
                id: this.id,
                updates: this.taskToSubmit

            })

            //emit an event in order to close the 'Add Task' modal
            this.$emit('closeModal')
        },

        clearDueDate(){
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    },
    components: {
        'Modal-Header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'Modal-Task-Name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
        'Modal-Task-Due-Date': require('components/Tasks/Modals/Shared/ModalTaskDueDate.vue').default,
        'Modal-Task-Due-Time': require('components/Tasks/Modals/Shared/ModalTaskDueTime.vue').default,
        'Modal-Buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
    },
    mounted(){
       this.taskToSubmit = Object.assign({}, this.task) 
    }
}
</script>

<style>

</style>

