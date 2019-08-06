<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
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
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigations</q-item-label>
        
        <q-item v-for="nav in navs" :key="nav.label" exact clickable :to="nav.to" >
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

<style>
  /* media query : if the browser is at least 768 px wide - hide the footer element */
 @media screen and (min-width: 768px){
   .q-footer{
     display: none;
   }
 }
</style>
