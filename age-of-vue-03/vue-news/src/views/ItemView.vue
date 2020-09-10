<template>
    <div>
        <section>
            <UserProfile :info="item">
                <router-link slot="username" :to="`/user/${item.by}`">
                    {{item.by}}
                </router-link>
                <div slot="time" class="type">{{ item.type }}</div>
            </UserProfile>
        </section>
        <section>
            <h2>{{item.title}}</h2>
        </section>
        <section>
            <p v-html="item.text"></p>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile'
export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters(['item'])
    },
    created() {
        const postNum = this.$route.params.postNum;

        this.$store.dispatch('FETCH_ITEM', postNum);

    }
}
</script>

<style scoped>
    section{
        padding: 0 0.7rem;
    }
</style>