<template>
    <div>
        com-b
        <br />
        {{ msg }}
    </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.getters.reverseMsg
    }
  }
}
</script>

<style>

</style>
