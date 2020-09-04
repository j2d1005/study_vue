<template>
    <div>
        <h1>{{ this.headerText }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "TodoHeader",
    computed: {
        ...mapState(['headerText'])
    }
}
</script>

<!--scoped는 컴포넌트 안에서만 유효한 스타일속성-->
<style scoped>
h1 {
    color:#2f3b52;
    font-weight: 900;
    margin:2.5rem 0 1.5rem;
}
</style>