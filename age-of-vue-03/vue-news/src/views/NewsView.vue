<template>
    <div>
        <div v-for="user in news" :key="user.id">{{user.title}}</div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            users: [],
        }
    },
    computed: {
        //#3
        ...mapGetters(['news'])

        //#2   #1,#2번으로 하면 위에 선언할 때 this.news로 해야 됨
        // ...mapState({
        //     news: state => state.news
        // })

        //#1
        // news() {
        //     return this.$store.state.news;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style scoped>

</style>