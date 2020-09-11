import bus from "@/utils/bus";

export default {
    // 재사용할 컴포넌트 옵션 & 로직

    created() {
        // 이벤트 버스는 라이프사이클 훅스 안에 선언
        bus.$emit('start:spinner');
        // setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch(error => console.log(error));
        // },1500)
    },

}


// 하이오더컴포넌트와 비교
// export default function create() {
//     return {
//         //재사용할 컴포넌트 옵션 & 로직
//     }
// }