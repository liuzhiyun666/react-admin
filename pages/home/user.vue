<template>
<div>
  <p @click="$router.push({path:'/home/login',query:{id:1}})">跳转到登录</p>
</div>
</template>

<script>
import {NavBar} from 'vant'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
