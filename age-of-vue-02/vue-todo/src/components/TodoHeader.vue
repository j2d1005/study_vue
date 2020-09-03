<template>
    <div>
        <h1>TODO IT!</h1>
    </div>
</template>

<script>
export default {
    name: "TodoHeader"
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