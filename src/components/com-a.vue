<template>
    <div>
        com-a
        {{ num }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // 假设当前组件中已经有count属性
  // 属性 是要映视到当前组件中的属性名称 this.num
  // 值: 是 vue 的仓库中管理的数据 this.$store.count
  // computed: mapState({
  // num: 'count'
  // })

  // this.count (这是一个计算属性) 映视到 this.$store.state.count
  computed: {
    // 组件本身的计算属性,写于不写都可以,不知道为什么我写了就报错,但仍能正常执行
    // test() {
    // }
    ...mapState({
      num: 'count'
    })
  }
}
</script>

<style>

</style>
