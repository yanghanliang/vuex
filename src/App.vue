<template>
  <div id="app">
    <input @click="hanleClick" type="button" value="点击">
    {{ $store.state.count }}
    <hr />
    <comp-a></comp-a>
  </div>
</template>

<script>
import compA from '@/components/com-a'

export default {
  name: 'App',
  components: {
    compA
  },
  methods: {
    hanleClick() {
      // 提交
      this.$store.commit('increate')
    }
  }
}
</script>

<style>
</style>
