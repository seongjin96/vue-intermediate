import Vue from 'vue'
import Vuex from 'vuex'

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
  }
});