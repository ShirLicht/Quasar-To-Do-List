<template>
    <div class="row q-mb-sm">
            <q-input outlined :value="dueDate" label="Due date" @input="$emit('update:dueDate', $event)">
                        
                <template v-slot:append>

                    <q-icon v-if="dueDate" name="close" @click="$emit('clear')" class="cursor-pointer"/>

                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy>
                            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
                        </q-popup-proxy>
                    </q-icon>
    
                </template>

            </q-input>
        </div>
</template>

<script>
export default {
    props: ['dueDate'],
    methods:{
        dueDateIsEntered(){
            $emit('update:dueDate', $event)
            $refs.qDateProxy.hide()
        }
    }
}
</script>

<style>

</style>




