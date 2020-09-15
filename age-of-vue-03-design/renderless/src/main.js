import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render 함수 작성법
  // 1. 기본문법
  render: function(createElement) {
    return createElement(App);
  },
  // 2. h는 버츄얼돔을 지칭하는 약자라고 보면 됨
  render: function(h) {
    return h(App);
  },
  // 3.
  render: (h) => {
    return h(App);
  },
  // 4.
  render: h => h(App),
}).$mount('#app')
