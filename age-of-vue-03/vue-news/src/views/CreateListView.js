import ListView from "./ListView";
import ListMixin from "@/mixins/ListMixin";
// import bus from "../utils/bus";

export default function createListView(name){
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name, // 연결할 컴포넌트 이름설정 // 여기서는 NewsView, AskView, JobsView

        // created() {
        //     // 이벤트 버스는 라이프사이클 훅스 안에 선언
        //     bus.$emit('start:spinner');
        //     // setTimeout(() => {
        //         this.$store.dispatch('FETCH_LIST', this.$route.name)
        //             .then(() => {
        //                 bus.$emit('end:spinner');
        //             })
        //             .catch(error => console.log(error));
        //     // },1500)
        // },
        mixins: [ ListMixin ],
        render(createElement) {
            return createElement(ListView);
        }
    }
}

// 하이오더컴포넌트에서 공통 로직을 수행하고 render 함수에서 ()안에 공통로직을 수행할 다음 컴포넌트를 선언