<template>
  <div :class="buttonClass" @click="onClick">
    <div class="button__text" v-if="text !== ''">
      <span :class="textClass">{{ text }}</span>
    </div>

    <div class="button__icon" v-if="icon !== ''">
      <SvgIconVue :name="icon" :isFlip="iconFlip"></SvgIconVue>
    </div>
  </div>
</template>

<script>
import SvgIconVue from '@/components/SvgIcon/SvgIcon.vue'

export default {
  props: {
    text: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: ""
    },
    iconFlip: {
      type: Boolean,
      default: false
    },

    isActive: {
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
  components: { SvgIconVue },
  computed: {
    buttonClass() {
      let newButtonClass = "button";

      if (this.isActive) newButtonClass += " active";
      if (this.isDisabled) newButtonClass += " disabled";
      if (this.text !== "" && this.icon !== "") newButtonClass += " button_text-icon"
      else if (this.icon !== "") newButtonClass += " button_small"

      return newButtonClass;
    },

    textClass() {
      let newTextClass = "text";

      if (this.isDisabled) newTextClass += " text_disabled";

      return newTextClass;
    }
  },
  methods: {
    onClick: function() {
      if (this.isDisabled) return;

      this.$emit("onButtonClick", {});
    }
  }
}
</script>

<style lang='scss'>
@import './index.scss';
</style>