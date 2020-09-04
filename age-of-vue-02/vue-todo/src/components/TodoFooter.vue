<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="this.clearAllItem">Clear All</span>
    </div>
</template>

<script>
import { mapMutations } from  'vuex';

export default {
    name: "TodoFooter",
    methods: {
        // clearTodo() {
        //     // this.$emit('clearAll');
        //     // vuex 사용 후---------------
        //     this.$store.commit('clearAllItem');
        // }
        ...mapMutations(["clearAllItem"])
        // 또는
        // ...mapMutations({
        //      clearTodo: 'clearAllItem'
        // })
    }
}
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: #e20303;
        display: block;
    }

</style>