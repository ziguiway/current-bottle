<template>
  <div>
    <!-- 筛选和签到按钮 -->
    <van-row>
      <van-button
        plain
        type="primary"
        class="Screening"
        round
        size="mini"
        icon="filter-o"
        @click="show = true"
        >筛选</van-button
      >
      <van-button
        plain
        type="primary"
        class="Screening"
        round
        size="mini"
        icon="records-o"
        >签到</van-button
      >
    </van-row>
    <!-- 签到动作 -->
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      description="希望认识的人"
      close-on-click-action
      @select="onSelect"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
//签到
const show = ref(false)
const actions = [
  { name: '不限性别(当前)', color: '#ee0a24' },
  { name: '男生' },
  { name: '女生' }
]
const onSelect = (item) => {
  show.value = false
  showToast(item.name)
}
</script>

<style lang="scss" scoped>
.Screening {
  margin-top: 15px;
  margin-left: 15px;
}
</style>
