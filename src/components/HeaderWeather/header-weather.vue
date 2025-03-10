<template>
  <div class="header">
    <ui-nav-bar 
      :nav-buttons="buttons" 
      @go-to="goTo"
    />

    <div class="header__city-select">
      <ui-select 
        :values="cities" 
        :default-value="currentCity" 
        @select="selectCity"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UiNavBar from '@/components/Ui/NavBar/ui-nav-bar.vue';
import UiSelect from '@/components/Ui/Select/ui-select.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { ICity } from '@/interfaces/ICity';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const router = useRouter();
const store = useStore();

const buttons = reactive([
  { id: 1, label: 'Главная', name: 'home' },
  { id: 2, label: 'Погода за неделю', name: 'week'},
]);

const cities = computed<ICity[]>(() => store.getters.getCities);
const currentCity = computed(() => {
  return store.getters.getCurrentCity;
})

const goTo = (name: string) => {
  router.push({ name })
};

const selectCity = (option: ICity) => {
  store.dispatch('setCurrentCity', option);
};
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start;
  }

  &__city-select {
    @media (max-width: 768px) {
     margin-top: 10px;
    }
  }
}
</style>