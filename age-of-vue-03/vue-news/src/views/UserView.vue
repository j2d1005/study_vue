<template>
    <UserProfile :info="user">
        <div slot="username">{{ user.id }}</div>
        <div slot="time" class="time">created: {{ user.created }}</div>
        <div slot="type" class="karma">karma: {{ user.karma }}</div>
    </UserProfile>
<!--    <div>-->
<!--        <p>name: {{ user.id }}</p>-->
<!--        <p>karma: {{ user.karma }}</p>-->
<!--        <p>created: {{ user.created }}</p>-->
<!--    </div>-->
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from "../components/UserProfile";
export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style scoped>

</style>