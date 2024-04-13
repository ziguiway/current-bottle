<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">漂流瓶</van-tabbar-item>
      <van-tabbar-item icon="fire-o" to="/danamic">动态</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/circle">圈子</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="scss" scoped></style>
