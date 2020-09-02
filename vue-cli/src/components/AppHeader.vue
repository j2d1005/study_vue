<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <input type="text" v-model="val" v-on:keyup.enter="sendEvent(val)">
        <button v-on:click="sendEvent(val)">send</button>
    </header>
</template>

<script>
export default {
    data: function() {
        return {
            val: '',
        }
    },
    props: ['propsdata'],
    methods: {
        sendEvent: function(val) {
            this.$emit('renew', val);
        },
    }
}
</script>

<style scoped>

</style>