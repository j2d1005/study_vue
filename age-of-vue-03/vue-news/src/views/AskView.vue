<template>
    <div>
        <div v-for="item in ask">{{item.title}}</div>
    </div>
</template>

<script>
// import { fetchAskList } from "../api";

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['ask'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');


        // // const vm = this;
        // fetchAskList()
        //     // .then(function(response){
        //     //     vm.ask = response.data
        //     // })
        //     // 화살표함수를 사용하면 비동기처리할 때 this 바인딩을 안해줘도 된다!
        //     .then(response => this.ask = response.data)
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
}
</script>

<style scoped>

</style>