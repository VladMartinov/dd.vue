<template>
  <div :class="checkBoxClass" @click="onCheckBoxClick">
    <SvgIcon :name="nameIcon"></SvgIcon>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },

    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  components: { SvgIcon },
  computed: {
    checkBoxClass() {
      let newCheckBoxClass = "checkbox";

      if (this.isDisabled) newCheckBoxClass += " disabled";
      if (this.value) newCheckBoxClass += " active";

      return newCheckBoxClass;
    },

    nameIcon() {
      return this.value ? "check-active" : "check";
    }
  },
  methods: {
    onCheckBoxClick: function() {
      if (this.isDisabled) return;

      this.$emit("onCheckBoxClick", { value: !this.value })
    }
  }
}
</script>

<style lang='scss'>
@import './index.scss';
</style>