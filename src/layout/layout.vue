<template>
  <div>
    <mallHeader/>
    <div style="display:flex;">
        <Aside/>
        <router-view style="flex:1"/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import mallHeader from "@/components/mallHeader";
export default {
  name: "layout",
  components: {
    mallHeader,
    Aside
  },
}
</script>

<style scoped>

</style>