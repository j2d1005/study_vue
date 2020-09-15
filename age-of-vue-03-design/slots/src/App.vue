<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item>
    </ul>
    <!--  같다    -->
    <ul>
      <item v-for="item in items">{{ item }}</item>
    </ul>
    <!--  슬롯은 마크업 확장성이 있다. 태그를 추가하거나 스타일도 줄 수 있음. -->
      <ul>
          <item>아이템 1</item>
          <item>아이템 2 <button>click</button></item>
          <item>
              <div>아이템 3</div>
              <img src="./assets/endgame.png" alt="endgame" style="width:50px; height:50px;">
          </item>
          <item>
              <div style="color:blue; font-size:18px;">아이템 4</div>
          </item>
          <item></item>
      </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
    data() {
        return {
            items: ['아이템 1','아이템 2','아이템 3','아이템 4','아이템 5']
        }
    },
}
</script>