<template>
  <div id="app">
      <ToolBar />
<!--      <transition name="fade">-->
          <router-view />
<!--      </transition>-->
      <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner";
import bus from './utils/bus'

export default {
    components: {
        ToolBar,
        Spinner
    },
    data() {
        return {
            loadingStatus : false
        }
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        }
    },
    created() {
        // Bus.$on('start:sppinner', () => this.loadingStatus = true);
        bus.$on('start:spinner', this.startSpinner);
        bus.$on('end:spinner', this.endSpinner);

        // .env 테스트
        console.log(process.env.VUE_APP_TITLE);
    },
    beforeDestroy() {
        // event등록하고 나면 이벤트 객체가 계속 쌓이기 때문에 이벤트 off를 꼭 해줘야 함
        bus.$on('start:spinner', this.startSpinner);
        bus.$on('end:spinner', this.endSpinner);
    }
}
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }
    a {
        color: #34495e;
        text-decoration: none;
    }
    a:hover {
        color: #42b883;
        text-decoration: underline;
    }
    a.router-link-exact-active {
        text-decoration: underline;
    }

    /*  Router transition  */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
