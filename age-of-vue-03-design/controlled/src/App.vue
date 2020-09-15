<template>
  <check-box v-model="checked"></check-box>
  <!--  인풋 벨류를 상위 컴포넌트에서 프롭스로 전달하면 값이 바뀔 때마다 에러가 뜸 - 하위컴포넌트에서 프롭스로 받은 데이터를 직접 바꿀 수 없기 때문  -->
  <!--  v-model로 해당 컴포넌트에서 바로 data와 맵핑할 수 있지만 상위 컴포넌트에서 인풋값을 관리하고 싶을 때 v-model로 하위컴포넌트에 보냄    -->
  <!--  내린 v-model은 하위컴포넌트의 인풋에서 :value="value"로 받을 수 있다(props) -->
  <!--  그리고 이벤트를 방출해서 상위컴포넌트에 다시 전달 -->
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data(){
    return{
       checked: false
    }
  },
  
}
</script>