<template>
  <label :class="radioClass" :for="nameElement" @click="onRadioClick">
    <input class="visually-hidden" :name="nameElement" type="checkbox" :value="value" v-bind="$attrs">
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "default"
    },
    setValue: {
      type: String,
      default: "default"
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
    radioClass() {
      let newRadioClass = "radio";

      if (this.value === this.setValue) newRadioClass += " active";
      if (this.isDisabled) newRadioClass += " disabled";

      return newRadioClass;
    }
  },
  methods: {
    onRadioClick: function() {
      if (this.value === this.setValue) return;

      this.$emit("onRadioClick", { value: this.setValue });
    }
  }
}
</script>

<style lang='scss'>
@import './index.scss';
</style>