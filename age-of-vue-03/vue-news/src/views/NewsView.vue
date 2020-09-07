<template>
    <div>
        <div v-for="user in users" :key="user.id">{{user.title}}</div>
    </div>
</template>

<script>
import { fetchNewsList } from "../api";

export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        const vm = this;
        fetchNewsList()
            .then(responce => {
                console.log(responce)
                vm.users = responce.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style scoped>

</style>