<template>
  <div class="weather-card">
    <div class="weather-card__date">
      {{ currentDateComputed }}
    </div>
    <div class="weather-card__content" v-if="currentWeather">
      <weather-icon class="weather-card__icon" :name="currentWeather.status.toLowerCase()" width="180px" height="180px" />

      <div class="weather-card__temperature">{{ currentWeather.temp }}</div>

      <div class="weather-card__data">
        <div class="weather-card__state">
          {{ currentState }}
        </div>
        <div class="weather-card__humidity">
          Влажность: {{ currentWeather.humidity }}%
        </div>
        <div class="weather-card__windy">
          Ветер: {{ currentWeather.wind_speed }} м/с
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeatherIcon from '@/components/WeatherIcon/weather-icon.vue';
import { WEATHER_STATUSES } from '@/constants/weather-statuses';
import type { IWeatherCardProps } from '@/interfaces/IWeatherCardProps';
import { currentDate } from '@/utils/currentDate';
import { computed } from 'vue';

const { currentWeather } = defineProps<IWeatherCardProps>();

const currentDateComputed = computed<string>(() => {
  const [day, dayOfWeek, month] = currentDate();

  return `${day} ${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} ${month}`;
});
const currentState = computed(() => currentWeather ? WEATHER_STATUSES.find((elem) => elem.name.toLowerCase().includes(currentWeather?.status.toLowerCase()))?.label : '')
</script>

<style scoped lang="scss">
.weather-card {
  margin-top: 15px;

  display: flex;
  flex-direction: column;

  &__date {
    font-weight: 500;
    font-size: 30px;
    color: #E9E9F399;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__temperature {
    font-size: 100px;
    font-weight: 700;
    color: white;

    margin-left: 44px;
  }

  &__data {
    display: flex;
    flex-direction: column;

    margin-left: 44px;

    div {
      margin-top: 12px;
      color: #fff;
      font-size: 24px;
      font-weight: 500;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>