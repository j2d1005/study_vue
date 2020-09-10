<template>
    <div>
        <ul class="news_list">
            <li v-for="item in ask" :key="item.id" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </p>
                    <small class="link_text">
                        by
                        <router-link v-bind:to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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

.news_list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link_text {
    color: #828282;
}
</style>