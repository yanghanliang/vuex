<template>
    <div>
        com-a
        {{ num }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // computed: mapState({
  // num: 'count'
  // })

  // this.count (这是一个计算属性) 映视到 this.$store.state.count
  computed: {
    ...mapState({
      num: 'count'
    })
  }
}
</script>

<style>

</style>
