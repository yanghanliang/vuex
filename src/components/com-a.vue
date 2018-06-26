<template>
    <div>
        com-a
        {{ count }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'count'
  ])
}
</script>

<style>

</style>
