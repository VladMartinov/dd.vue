<template>
  <div :class="inputClass">
    <input class="input text" :class="{ 'text_disabled' : isDisabled }" type="text" v-bind="$attrs" v-model="value" @focus="isFocus = true;" @blur="isFocus = false;" @input="onInputNewValue">

    <div class="input__clear-btn" v-if="isSearch && value !== ''" :class="{ 'disabled' : isDisabled }" @click="onClearButtonClick">
      <SvgIcon :name="'clear'" :size="{ width: 16, height: 16 }"></SvgIcon>
    </div>

    <div class="input__search-btn" v-if="isSearch" :class="{ 'disabled' : isDisabled }" @click="onSearchButtonClick(false);">
      <SvgIcon :name="'search'"></SvgIcon>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';

export default {
  inheritAttrs: false,
  props: {
    initialValue: {
      type: String,
      default: ""
    },

    isSearch: {
      type: Boolean,
      default: false
    },
    isSmall: {
      type: Boolean,
      default: false
    },

    isError: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { value: this.initialValue, isFocus: false };
  },
  components: { SvgIcon },
  computed: {
    inputClass() {
      let newInputClass = "input__wrapper";

      if (this.isSmall) newInputClass += " small";
      if (this.isFocus) newInputClass += " focus";
      if (this.isDisabled) newInputClass += " disabled";
      if (this.isError) newInputClass += " error";

      return newInputClass;
    }
  },
  watch: {
    initialValue: function() { this.value = this.initialValue; },
    value: function() { this.onInputNewValue(); }
  },
  methods: {
    onInputNewValue: function( answer = true ) {
      if (this.isDisabled || (this.isSearch && answer )) return;

      this.$emit("onInputNewValue", { value: this.value });
    },

    onClearButtonClick: function() {
      if (this.isDisabled) return;

      this.$emit("onInputNewValue", { value: "" });
    },
    onSearchButtonClick() {
      if (this.isDisabled) return;

      this.$emit("onInputNewValue", { value: this.value });
    }
  }
}
</script>

<style lang='scss'>
@import './index.scss';
</style>