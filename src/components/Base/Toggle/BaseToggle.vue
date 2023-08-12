<template>
  <label :class="toggleClass" :for="nameElement" @click="onToggleClick">
    <input class="visually-hidden" :name="nameElement" type="checkbox" :value="value">
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    nameElement: {
      type: String,
      default: "default"
    },

    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    toggleClass() {
      let newToggleClass = "toggle";

      if (this.value) newToggleClass += " active";
      if (this.isDisabled) newToggleClass += " disabled";

      return newToggleClass;
    }
  },
  methods: {
    onToggleClick: function() {
      this.$emit("onToggleClick", { value: !this.value });
    }
  }
}
</script>

<style lang='scss'>
@import './index.scss';
</style>