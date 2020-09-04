<template>
    <div>
<!--        <h1>{{ this.$store.state.headerText }}</h1>-->
        <h1>{{ this.headerText }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "TodoHeader",
    computed: {
        ...mapState({
            headerText: state => state.todoApp.headerText
        })
    }

    // 모듈화된 스토어에서 mapState 쓰는법 예제 ..
    // https://kdydesign.github.io/2019/04/06/vuejs-vuex-helper/
    // computed: {
    //     ... mapState({
    //         bookList: state => state.A.B.C.Book.list
    //     })
    // },
    // methods: {
    //     ...mapActions([
    //         'A/B/C/Book/setList'
    //     ])
    // }
}
</script>

<!--scoped는 컴포넌트 안에서만 유효한 스타일속성-->
<style scoped>
h1 {
    color:#2f3b52;
    font-weight: 900;
    margin:2.5rem 0 1.5rem;
}
</style>