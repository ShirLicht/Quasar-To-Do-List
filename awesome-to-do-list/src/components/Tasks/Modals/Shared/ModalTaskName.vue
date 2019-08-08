<template>
     
        <div class="row q-mb-sm">
            <q-input outlined autofocus :value="name" label="Task's name" class="col" ref="name" @input="$emit('update:name', $event)" :rules="[val => !!val || 'Field is required']" >
                <template v-slot:append>
                    <q-icon v-if="name" name="close" @click="$emit('update:name', '')" class="cursor-pointer"/>
                </template>
            </q-input>
        </div>
</template>

<script>
export default {
    props: ['name']
    
}
</script>

<style>

</style>


