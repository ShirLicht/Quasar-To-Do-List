import Vue from 'vue'

const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/08/07',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/08/08',
      dueTime: '14:00'
    }, 
    'ID3': {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/08/08',
      dueTime: '14:30'
    },
    
  } 
  
  /* tasks: [
        {
          id:1,
          name: 'Go to shop',
          completed: false,
          dueDate: '2019/08/07',
          dueTime: '18:30'

        },
        {
          id:2,
          name: 'Get bananas',
          completed: false,
          dueDate: '2019/08/08',
          dueTime: '14:00'
        },
        {
          id:3,
          name: 'Get apples',
          completed: false,
          dueDate: '2019/08/08',
          dueTime: '14:30'
        }
          ]*/

}

//methods that will manipulate the states
//The methods --can not be asnyc--
const mutations = {
  updateTask(state, payload){
    //Object.assign - allows to copy properties from one object to another
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id){
    //in Vue.js when we want to delete a keyed object from the state/ add a new object to the state - in order to keep it reactive we need to use a builtin Vue methods
    //use Vue delete method in order to delete a task 
    Vue.delete(state.tasks, id)
  }
}

// methods - can be async
const actions = {
    //update a task state - completed/not completed
    //inputs - an object and payload (payload is the input that is coming from the source that calls the function )
    updateTask({ commit }, payload){
      //call a mutation - fire the 'updateTask' mutation
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id){
      //fire the 'deleteTask' mutation
      commit('deleteTask', id)
    }

}

// methods that get the data from the state and later can be used by the components
const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    //allows to have mulitple store modules within the app
    namespaced: true,

    state,
    mutations,
    actions,
    getters
}