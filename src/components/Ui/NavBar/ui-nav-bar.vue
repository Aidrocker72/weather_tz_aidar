<template>
  <div class="nav-bar">
    <button 
      class="nav-bar__button" 
      :class="{ 'active': activeButton === name }" 
      @click="emits('goTo', name)"
      v-for="{ id, label, name } in navButtons" 
      :key="id" 
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { INavBarProps } from '@/interfaces/Ui/INavBarProps';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { navButtons } = defineProps<INavBarProps>();
const emits = defineEmits(['goTo']) 
const activeButton = computed(() => route.name);
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  width: 100%;

  &__button {
    background-color: #E9E9F31A;
    border-left: 1px solid #E9E9F333;
    border-right: 1px solid #E9E9F333;

    display: flex;
    align-items: center;

    padding: 10px 16px;

    color: #E9E9F31A;
    font-weight: 500;
    font-size: 22px;

    transition: all ease-in-out .5s;

    &.active {
      color: #ffff;
    }


    &:hover {
      color: #ffff;
    }

    &:first-child {
      border-radius: 8px 0px 0px 8px;
      border-color: #E9E9F333;

      border-left: none;
    }

    &:last-child {
      border-radius: 0px 8px 8px 0px;
      border-color: #E9E9F333;

      border-right: none;
    }

    &:disabled {
      color: #E9E9F31A;
    }
  }

}
</style>