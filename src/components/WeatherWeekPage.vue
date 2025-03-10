<template>
  <div class="weather-week-page">
    <ui-title :title="titleComputed" />

    <div class="weather-week-page__content">
     <weather-day-card 
      v-for="{ time, status, temp } in weathersWeekly" 
      :key="time" 
      :icon-type="status"
      class="weather-week-page__item"
    >
      <template #title>
        <div class="weather-week-page__title">
          {{ time }}
        </div>
      </template>

      <template #temp>
        <div class="weather-week-page__temp">
          {{ temp }}°
        </div>
      </template>
     </weather-day-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import UiTitle from '@/components/Ui/Title/ui-title.vue';
import WeatherDayCard from '@/components/WeatherDayCard/weather-day-card.vue';
import type { ICity } from '@/interfaces/ICity';
import type { IWeather } from '@/interfaces/IWeather';
import type { IHourlyWeather } from '@/interfaces/IHourlyWeather';

const store = useStore();

const currentCity = computed<ICity>(() => store.state.currentCity);
const titleComputed = computed(() => {
  return `Погода в городе ${currentCity.value ? currentCity.value.label : ''}`;
});

const weathers = computed(() => store.getters.getWeathers);
const weathersWeekly = computed<IHourlyWeather[]>(() => {
  if (weathers.value) {
    const weatherItem = weathers.value.find((elem: IWeather) => elem.name === currentCity.value.name);

    return weatherItem.weekly_weather || null;
  }

  return null;
});


</script>

<style scoped lang="scss">
.weather-week-page {
  width: 100%;

  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    margin-top: 48px;
  }

  &__item {
    margin-left: 35px;

    color: #fff;

    &:first-child {
      margin-left: 0;
    }
  }

  &__title, &__temp {
    font-size: 18px;
    font-weight: 400;
  }
}
</style>