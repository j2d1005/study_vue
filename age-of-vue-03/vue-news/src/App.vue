<template>
  <div id="app">
      <ToolBar />
      <router-view />
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
</style>
