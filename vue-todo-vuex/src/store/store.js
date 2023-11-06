import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'

// use - Vue를 사용하는 모든 영역에 특정 기능을 추가하고 싶을 때 사용
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters,
  mutations
  // getters: {
  //   storedTodoItems(state) {
  //     return state.todoItems
  //   }
  // },

  // mutations: {
  //   addOneItem(state, todoItem) {
  //     const obj = {
  //       completed: false, 
  //       item: todoItem
  //     };
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     state.todoItems.push(obj);
  //   },
  //   removeOneItem(state, {todoItem, index}) {
  //     localStorage.removeItem(todoItem.item);
  //     state.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(state, {todoItem, index}) {
  //     state.todoItems[index].completed = !state.todoItems[index].completed;
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems(state) {
  //     localStorage.clear();
  //     state.todoItems = [];
  //   }
  // }
});