<template>
  <div class="home">
    <ui-title :title="titleComputed" />

    <div class="home__content">
      <weather-card :currentWeather="currentWeather" />
      <weather-time-card :items="weatherHorly"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import UiTitle from '@/components/Ui/Title/ui-title.vue';
import WeatherTimeCard from '@/components/WeatherTimeCard/weather-time-card.vue';
import weatherCard from '@/components/WeatherCard/weather-card.vue';
import type { ICity } from '@/interfaces/ICity';
import { currentDate } from '@/utils/currentDate';
import type { IWeather } from '@/interfaces/IWeather';
import type { IWeeklyWeather } from '@/interfaces/IWeeklyWeather';

const store = useStore();

const weatherHorly = ref([]);

const currentCity = computed<ICity>(() => store.state.currentCity);
const titleComputed = computed(() => {
  return `Погода в городе ${currentCity.value ? currentCity.value.label : ''}`;
});
const weathers = computed(() => store.getters.getWeathers);
const currentWeather = computed(() => {
  if (weathers.value) {
    const [day] = currentDate();

    const weatherItem = weathers.value.find((elem: IWeather) => elem.name === currentCity.value.name);
    weatherHorly.value = weatherItem.hourly_weather;

    return weatherItem.weekly_weather.
      find((elem: IWeeklyWeather) => {
        return elem.time.toLowerCase().includes(day.split(',')[0].toLowerCase());
      }) || null;
  }

  return null;
});
</script>

<style scoped lang="scss">
.home {
  width: 100%;

  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
}
</style>
