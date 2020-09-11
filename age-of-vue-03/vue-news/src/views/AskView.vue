<template>
    <ListItem></ListItem>
</template>

<script>
import ListItem from "../components/ListItem";
import Bus from "@/utils/bus";
export default {
    created() {
        // 이벤트 버스는 라이프사이클 훅스 안에 선언
        Bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_ASK')
                .then(() => {
                    console.log('fetched');
                    Bus.$emit('end:spinner');
                })
                .catch(error => console.log(error));
        },1500)
    },
    components: {
        ListItem
    }
}
</script>