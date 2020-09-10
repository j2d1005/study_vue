<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-desc">
<!--            <div>{{info.id}}</div>-->
<!--            <div class="type">{{info.created}}</div>-->
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <slot name="type">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <slot name="karma">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>

<!--  ItmeView에서 부를때 username은 info.user이고  -->
<!--  UserView에서 부를때 username은 info.id이고  -->
<!--  페이지별로 넣어줄 속성이 다르기 때문에 v-if 보다 이게 더 깔끔하다?  -->

        </div>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    props: {
        //타입 벨리데이션 체크
        info: Object
    },
    // 바로 스토어에 연결해서 가져와도 된다. 상황봐서 알맞는걸로 선택하기
    // computed: {
    //     ...mapGetters(['user'])
    // },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.7rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-desc {
    padding-left:10px;
}
.type, .time, .karma {
    padding-top: 3px;
    font-size: 0.8rem;
}

</style>