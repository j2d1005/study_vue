<template>
    <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem'
// import Bus from '../utils/bus'
import ListMixin from "../mixins/ListMixin";
export default {
    components: {
        ListItem
    },
    mixins: [ ListMixin ],
    // created() {
    //     // 이벤트 버스는 라이프사이클 훅스 안에 선언
    //     Bus.$emit('start:spinner');
    //     setTimeout(() => {
    //         this.$store.dispatch('FETCH_NEWS')
    //             .then(() => {
    //                 console.log('fetched');
    //                 Bus.$emit('end:spinner');
    //             })
    //             .catch(error => console.log(error));
    //     },1500)
    // },
}
</script>


<!-- store에서 state 가져오기 예제 -->
<!--<script>-->
<!--export default {-->
<!--    computed: {-->
<!--        //#3-->
<!--        ...mapGetters(['news'])-->

<!--        //#2-->
<!--        // ...mapState({-->
<!--        //     news: state => state.news-->
<!--        // })-->

<!--        //#1-->
<!--        // news() {-->
<!--        //     return this.$store.state.news;-->
<!--        // }-->
<!--    },-->

<!-- 화살표함수와 this 바인딩 -->
<!--    created() {-->
<!--    this.$store.dispatch('FETCH_ASK');-->
<!--    -->
<!--    -->
<!--    // // const vm = this;-->
<!--    // fetchAskList()-->
<!--    //     // .then(function(response){-->
<!--    //     //     vm.ask = response.data-->
<!--    //     // })-->
<!--    //     // 화살표함수를 사용하면 비동기처리할 때 this 바인딩을 안해줘도 된다!-->
<!--    //     .then(response => this.ask = response.data)-->
<!--    //     .catch(error => {-->
<!--    //         console.log(error);-->
<!--    //     })-->
<!--    }-->
<!--}-->
<!--</script>-->