<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-desc">
                    <router-link :to="`/user/${item.by}`">
                        {{item.by}}
                    </router-link>
                    <div class="type">
                        {{item.type}}
                    </div>
                </div>
            </div>
            <h2>{{item.title}}</h2>
        </section>
        <section>
            <p>{{item.text}}</p>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
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
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.7rem 0;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-desc {
        padding-left:10px;
    }
    .type {
        padding-top: 3px;
        font-size: 0.8rem;
    }
</style>