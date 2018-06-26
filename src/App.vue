<template>
  <div id="app">
    <input @click="hanleClick" type="button" value="点击">
    {{ $store.state.count }}
    <hr />
    <comp-a></comp-a>
    <br />
    <comp-b></comp-b>
  </div>
</template>

<script>
import compA from '@/components/com-a'
import compB from '@/components/com-b'

export default {
  name: 'App',
  components: {
    compA,
    compB
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
