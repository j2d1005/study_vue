<template>
    <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem'
export default {
    components: {
        ListItem
    }
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