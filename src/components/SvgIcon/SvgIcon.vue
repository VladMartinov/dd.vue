<template>
  <svg :class="className" :width="size.width || 24" :height="size.height || 24">
    <use :xlink:href="iconPath"/>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },

    size: {
      type: Object,
      default: function() {
        return { width: 24, height: 24 };
      }
    },
    isFlip: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      let newClassName = 'svg-icon svg-icon--' + this.name;

      if (this.isFlip) newClassName + ' svg-icon_flipped';

      return newClassName;
    }
  }
};
</script>

<style>
  @import "./index";
</style>
