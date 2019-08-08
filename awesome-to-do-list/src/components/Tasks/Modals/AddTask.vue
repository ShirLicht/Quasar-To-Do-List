<template>
  <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add a Task</div>
            <q-space/>
            <q-btn flat round dense icon="close" v-close-popup/>
        </q-card-section>

        <!--form: using 'prevent' in order to prevent the default action of the event -->
        <form @submit.prevent="submitForm">
             <q-card-section>

            <!--input: task's name -->
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.name" label="Task's name" class="col" ref="name" :rules="[val => !!val || 'Field is required']" />
                </div>

            <!--input: task's due date -->
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.dueDate" label="Due date">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>

            <!--input: task's due time -->
                <div class="row q-mb-sm">
                    <q-input outlined v-model="taskToSubmit.dueTime" label="Due time">
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-time v-model="taskToSubmit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>

            </q-card-section>

            <q-card-actions align="right">

            <!--savr button : submit the form-->
                <q-btn flat label="Save" color="primary" type="submit"  />
            
            </q-card-actions>

        </form>

       

  </q-card>    
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return{
            taskToSubmit: {
                 name: '',
                 dueDate: '',
                 dueTime: '',
                 completed: false,
            }
        }
    },
    methods: {

       //map the 'addTask' action from the tasks store module to this component
       ...mapActions('tasks', ['addTask']),
        submitForm() {
          
          //fire the validate method on the 'name' text input
          this.$refs.name.validate();

        //check if the input it ok - there is no error in the validtion of the input
          if(!this.$refs.name.hasError){
            this.submitTask()
          }

        },

        submitTask(){
            //sent the new task to the app's storage
            this.addTask(this.taskToSubmit)

            //emit an event in order to close the 'Add Task' modal
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>

