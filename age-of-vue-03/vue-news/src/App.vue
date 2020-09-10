<template>
  <div id="app">
      <ToolBar />
      <transition name="fade">
          <router-view />
      </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";

export default {

    components: {
        ToolBar,
    }
}
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }

    /*  Router transition  */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
