<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
    // 생략하고 위와 같이 바로 emit 방출할 수도 있다.!!
    // methods: {
    //   sendRenew() {
    //       this.$emit('renew');
    //   }
    // }
}
</script>