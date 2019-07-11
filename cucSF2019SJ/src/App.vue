<template>
  <div id="app">
    <router-view />
    <ToolBar/>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar'

  export default {
    name: 'App',
    components: {
      ToolBar,
    },
  }

</script>

<style>
  #app {
    width: 90%;
    top: 20px;
    margin: auto;
  }

</style>
