<template>
    <div>
        <ul class="news_list">
            <li v-for="job in jobs" :key="job.id" class="post">
                <div class="points">
                    {{ job.points || 0 }}
                </div>
                <div>
                    <p class="news-title">
                        <a :href="job.url" class="link-text">{{ job.title }}</a>
                    </p>
                    <small class="link_text">
                        {{ job.time_ago }} by {{ job.domain }}
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['jobs'])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
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