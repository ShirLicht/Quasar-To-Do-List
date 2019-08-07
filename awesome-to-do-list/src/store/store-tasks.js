
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

}

// methods - can be async
const actions = {

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