<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
     
        <q-toolbar-title class="absolute-center">
          Quasar Todos App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
        <q-tabs>
            <q-route-tab v-for="nav in navs" :key="nav.label" :to="nav.to" :icon="nav.icon" :label="nav.label"/>
        </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigations</q-item-label>
        
        <q-item class="text-grey-4" v-for="nav in navs" :key="nav.label" exact clickable :to="nav.to" >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
          {
            label:'Todo List',
            icon:'list',
            to: '/'
          },
          {
            label:'Settings',
            icon:'settings',
            to: '/settings'
          }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss">

  /* media query : if the browser is at least 768 px wide - hide the footer element */
 @media screen and (min-width: 768px){
   .q-footer{
     display: none;
   }
 }

  .q-drawer{
      .q-router-link--exact-active{
          color: white !important;
      }
    
  }
</style>
