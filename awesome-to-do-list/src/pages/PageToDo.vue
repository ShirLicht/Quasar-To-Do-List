<template>
  <q-page class="q-pa-md">

    <p>Todos List</p>
      <q-list separator borderd>

      <q-item
       v-for="task in tasks"
       :key="task.id"
       @click="task.completed = !task.completed"
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

          <q-item-section>

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

      </q-item>

    </q-list>

  </q-page>
</template>


<script>

import {mapGetters} from 'vuex';

export default {
   name: 'PageToDo',
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
