<template>
    <div>
        <div v-for="job in jobs">{{ job.title }}</div>
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

</style>