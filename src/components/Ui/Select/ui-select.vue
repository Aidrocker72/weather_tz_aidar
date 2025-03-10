<template>
  <div 
    class="ui-select" 
    :tabindex="tabindex" 
    @blur="isOpen = false"
    v-if="defaultValue"
  >
    <div 
      class="ui-select__selected" 
      @click="isOpen = !isOpen"
     
    >
      {{ defaultValue.label }}
    </div>

    <div class="ui-select__values" :class="{ '--hide': !isOpen }">
      <div
        v-for="(option, i) of values"
        :key="i"
        class="ui-select__value"
        @click="select(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends ICity">
import type { ICity } from '@/interfaces/ICity';
import type { ISelectProps } from '@/interfaces/Ui/ISelectProps';
import { ref } from 'vue';

const { defaultValue = null, tabindex = 0, values = [] } = defineProps<ISelectProps<T>>();
const emits = defineEmits(['select']);
 
const isOpen = ref(false);

const select = (option: ICity) => {
  isOpen.value = false;

  emits('select', option);
};
</script>

<style lang="scss">
.ui-select {
  position: relative;
  max-width: 246px;
  min-width: 246px;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;


  &__selected {
    background-color: #E9E9F31A;
    border-radius: 6px;
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    &::after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;

      box-sizing: border-box;
      height: 10px;
      width: 10px;
      border: 5px solid transparent;
      border-style: solid;
      border-color: #E9E9F31A;
      border-width: 0px 1px 1px 0px;
      transform: rotate(45deg);
      transition: border-width 15ms ease-in-out;
    }
  }

  &__values {
    color: #E9E9F31A;
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    top: 60px;
    z-index: 1;

    &.--hide {
      display: none;
    }
  }

  &__value {
    color: #000;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #E9E9F333;
    }
  }
}
</style>