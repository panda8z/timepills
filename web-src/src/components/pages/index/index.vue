<template>
  <div class='index-page'>
    <topBar></topBar>
    <contentBody ></contentBody>
  </div>
</template>

<script>

import topBar from '@/components/common/topBar.vue'
import contentBody from "./components/contentBody"
export default {
   components:{
     topBar,
     contentBody
   },

   methods:{

   }
}
</script>

<style lang="less" scoped>

</style>


