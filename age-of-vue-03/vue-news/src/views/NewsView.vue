<template>
    <div>
        <p v-for="item in news" :key="item.id">
            <a v-bind:href="item.url">{{ item.title }}</a>
            <small>{{ item.time }} by {{ item.user }}</small>
        </p>
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

        //#2
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