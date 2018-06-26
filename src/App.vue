<template>
  <div id="app">
    <input @click="hanleClick" type="button" value="点击">
    {{ $store.state.count }}
    <hr />
    <comp-a></comp-a>
    <br />
    <comp-b></comp-b>
    <br />
    <comp-c></comp-c>
  </div>
</template>

<script>
import compA from '@/components/com-a'
import compB from '@/components/com-b'
import compC from '@/components/com-c'

export default {
  name: 'App',
  components: {
    compA,
    compB,
    compC
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
