<template>
  <div id="app">
    <component :is="layout">
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">Users</router-link>-->
<!--      <router-link to="/work">Work</router-link>-->
<!--      <font-awesome-icon icon="plus" />-->
        <router-view />
    </component>
<!--    <router-view/>-->
  </div>
</template>

<script>
  import MainLayout from "@/layouts/MainLayout";

  export default {
    computed: {
      layout() {
        console.log(this.$route.meta);
        return 'MainLayout'
        // return (this.$route.meta.layout || 'MainLayout')
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<style lang="scss">
@import "scss/style";
</style>
