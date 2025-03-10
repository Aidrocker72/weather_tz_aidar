<template>
  <div class="main">
    <header-weather />
    <router-view />
    <popular-weather />
  </div>
</template>

<script setup lang="ts">
import HeaderWeather from '@/components/HeaderWeather/header-weather.vue';
import popularWeather from '@/components/PopularWeather/popular-weather.vue';
import { onMounted } from 'vue';
import { fetchCities, fetchWeather } from '@/services';
import { useStore } from 'vuex';

const store = useStore();

onMounted(async () => {
  const citiesData = await fetchCities();
  const weatherData = await fetchWeather();
  store.dispatch('setCurrentCity', citiesData.data[0]);
  store.dispatch('setCities', citiesData.data);
  store.dispatch('setWeathers', weatherData.data);
});
</script>

<style lang="scss">
.main {
  font-family: Georgia, 'Times New Roman', Times, serif;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(140deg, rgba(5,38,82,1) 32%, rgba(45,156,219,1) 81%);

  padding: 39px 40px;
}

</style>