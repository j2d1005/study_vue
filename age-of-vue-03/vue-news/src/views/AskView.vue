<template>
    <div>
        <div v-for="item in ask">{{item.title}}</div>
    </div>
</template>

<script>
import { fetchAskList } from "../api";

export default {
    data() {
        return {
            ask: []
        }
    },
    created() {
        // const vm = this;
        fetchAskList()
            // .then(function(response){
            //     vm.ask = response.data
            // })
            // 화살표함수를 사용하면 비동기처리할 때 this 바인딩을 안해줘도 된다!
            .then(response => this.ask = response.data)
            .catch(error => {
                console.log(error);
            })
    }
}
</script>

<style scoped>

</style>