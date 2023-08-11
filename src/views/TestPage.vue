<template>
  <BaseButton class="button_secondary" :text="'Test'"></BaseButton>
  <BaseButton class="button_secondary" :icon="'dots'"></BaseButton>
  <BaseButton class="button_primary" :text="'Test'" :icon="'arrow-bottom'"></BaseButton>
  <BaseButton class="button_nav" :text="'Test'"></BaseButton>
</template>

<script>
import BaseButton from '@/components/Base/Button/BaseButton.vue'

export default {
  props: {},
  data() {
    return {}
  },
  components: { BaseButton },
  methods: {}
}
</script>

<style lang='scss'>
</style>