<!--
기존에는 NewsView, JobsView, AskView 각 컴포넌트 > ListItem 컴포넌트가 있었는데
하이오더컴포넌트를 사용해서 중복로직을 처리하고
CreateListView(HOC) > ListView > ListItem 으로 구조가 변경됨 중간에 ListView 컴포넌트가 생김

이 컴포넌트(ListView)는 하이오더컴포넌트에서 거쳐가는 컴포넌트

//---궁금한 점
왜 CreateListView에서 ListItem을 바로 render하지 않는걸까???????????
테스트 해보니까 바로 렌더 해도 동작 잘 됨
--------------
NewsView, JobsView, AskView 각 컴포넌트에서 공통으로 사용하는 로직만 hoc로 빼고 나머지는 ListView로 남겨둔 듯.. (분리의 개념?)
-->
<template>
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from "../components/ListItem";


export default {
    components: {
        ListItem
    }
}
</script>

<style scoped>

</style>