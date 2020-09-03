<template>
    <div>
<!--        <AppHeader v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></AppHeader>-->
        <AppHeader
            v-bind:propsdata="str"
            v-on:renew="renewStr"
        ></AppHeader>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    // vue 인스턴스에서 선언할 때와 다르게 객체를 만들어서 리턴해야함
    data: function() {
        return{
            str: 'Header',
        }
    },
    components: {
        'AppHeader': AppHeader
    },
    methods: {
        renewStr: function(val) {
            this.str = val;
        },
    }
}
</script>

<style scoped>

</style>