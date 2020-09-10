<template>
    <div>
        <ul class="news_list">
            <li v-for="item in news" :key="item.id" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <a :href="item.url">
                            {{item.title}}
                        </a>
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
import { mapGetters } from 'vuex';

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