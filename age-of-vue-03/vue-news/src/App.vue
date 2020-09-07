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
</style>
