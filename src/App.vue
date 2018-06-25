<template>
  <div id="app">
    <input @click="hanleClick" type="button" value="点击">
    {{ $store.state.count }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
