<template>
    <div>
        com-b
        <br />
        <!-- {{ reverseMsg }} -->
        {{ rMsg }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
//   computed: {
//     msg() {
//       return this.$store.getters.reverseMsg
//     }
//   }
  computed: {
    // 注意这里是大括号
    ...mapGetters({
      'rMsg': 'reverseMsg'
    })
  }
}
</script>

<style>

</style>
