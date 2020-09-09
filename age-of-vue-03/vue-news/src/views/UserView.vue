<template>
    <div>
        <p>name: {{ user.id }}</p>
        <p>karma: {{ user.karma }}</p>
        <p>created: {{ user.created }}</p>
    </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        // console.log(this.$route);

        const userName = this.$route.params.id;

        // axios.get(`https://hacker-news.firebaseio.com/v0/user/${userName}.json?print=pretty`)
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style scoped>

</style>