<template>
    <div>
        <p>{{item.title}}</p>
        <p>id: {{item.by}}</p>
        <p>{{item.text}}</p>
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

</style>