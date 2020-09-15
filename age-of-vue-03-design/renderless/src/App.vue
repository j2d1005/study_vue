<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- 하위 컴포넌트에서 render함수 안에 $scopedSlots로 올린 데이터를 slot-scope로 받을 수 있다. -->
      <!-- slot-scope가 선언된 태그 내에서만 속성에 접근가능 -->
      <div slot-scope="{response, loading}">
        <div v-if="!loading">
          <p>name : {{response.name}}</p>
          <p>email : {{response.email}}</p>
        </div>
        <div v-if="loading">loading...</div>
      </div>
      
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
}
</script>