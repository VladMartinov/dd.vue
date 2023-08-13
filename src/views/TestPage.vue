<template>
  <BaseButton class="button_secondary" :text="'Test'"></BaseButton>
  <BaseButton class="button_secondary" :icon="'dots'"></BaseButton>
  <BaseButton class="button_primary" :text="'Test'" :icon="'arrow-bottom'"></BaseButton>
  <BaseButton class="button_nav" :text="'Test'"></BaseButton>

  <BaseToggle :value="testToggle" :nameElement="'test'" @onToggleClick="testToggle = $event.value;"></BaseToggle>
  <BaseToggle :value="testToggle" :nameElement="'test-1'" :isDisabled="true" @onToggleClick="testToggle = $event.value;"></BaseToggle>

  <BaseRadio name="radio-test" :value="testRadio" :setValue="'test-1'" :nameElement="'test-2'" @onRadioClick="testRadio = $event.value;"></BaseRadio>
  <BaseRadio name="radio-test" :value="testRadio" :setValue="'test-2'" :nameElement="'test-3'" @onRadioClick="testRadio = $event.value;"></BaseRadio>
  <BaseRadio name="radio-test" :value="testRadio" :setValue="'test-1'" :nameElement="'test-4'" :isDisabled="true" @onRadioClick="testRadio = $event.value;"></BaseRadio>

  <BaseCheckBox :value="testCheckBox" @onCheckBoxClick="testCheckBox = $event.value"></BaseCheckBox>
  <BaseCheckBox :value="testCheckBox" :isDisabled="true" @onCheckBoxClick="testCheckBox = $event.value"></BaseCheckBox>
</template>

<script>
import BaseButton from '@/components/Base/Button/BaseButton.vue'
import BaseToggle from '@/components/Base/Toggle/BaseToggle.vue'
import BaseRadio from '@/components/Base/Radio/BaseRadio.vue'
import BaseCheckBox from '@/components/Base/CheckBox/BaseCheckBox.vue'

export default {
  props: {},
  data() {
    return {
      testToggle: false,
      testRadio: "test-1",
      testCheckBox: false,
    }
  },
  components: {
    BaseButton, BaseToggle, BaseRadio, BaseCheckBox
  },
  methods: {}
}
</script>

<style lang='scss'>
</style>