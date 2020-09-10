<template>
    <div>
        <ul class="news_list">
            <li v-for="item in listItem" :key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="news-title">
                        <!-- template 태그로 분기  -->
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="link_text">
                        by
                        <!-- 태그에 바로 v-if v-else 써도 됨 -->
                        <router-link
                            v-if="item.user"
                            v-bind:to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
                        <a v-else :href="item.domain">{{item.domain}}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    computed: {
        // ...mapGetters(['news'])
        listItem() {
            const page = this.$route.name;
            if(page === 'news'){
                return this.$store.state.news;
            }else if( page ==='ask' ){
                return this.$store.state.ask;
            }else if( page ==='jobs' ){
                return this.$store.state.jobs;
            }

        }
    },
    created() {
        const page = this.$route.name;
        if(page === 'news'){
            this.$store.dispatch('FETCH_NEWS');
        }else if( page ==='ask' ){
            this.$store.dispatch('FETCH_ASK');
        }else if( page ==='jobs' ){
            this.$store.dispatch('FETCH_JOBS');
        }
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