<template>
    <div class="header">
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>


<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
    }
    .header a {
        color: inherit;
    }
    .header a.router-link-active {
        color:#354953;
    }
</style>