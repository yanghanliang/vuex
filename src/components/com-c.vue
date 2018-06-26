<template>
    <div>
        com-c
        <input @click="handleAdd" type="button" value="添加">
        {{ count }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    handleAdd() {
      this.$store.commit({
        type: 'increate',
        num: 3
      })
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  }
}
</script>

<style>

</style>
