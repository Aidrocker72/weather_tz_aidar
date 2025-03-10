<template>
  <div class="weather-time-card" v-if="items">
    <div class="weather-time-card__item" v-for="{ time, temp, status, wind_speed, humidity } in items" :key="time">
      <div class="weather-time-card__time">
        <div class="time">{{ time }}</div>
      </div>
      <div class="weather-time-card__temperature">{{ temp }}°</div>
      <div class="weather-time-card__icon">
        <weather-icon :name="status" width="60px" height="60px"/>
        <div class="state">Облачно</div>
      </div>
      <div class="weather-time-card__windy">
        {{ wind_speed }} м/с
      </div>
      <div class="weather-time-card__humidity">
        {{ humidity }}%
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import WeatherIcon from '@/components/WeatherIcon/weather-icon.vue';
import type { IWeatherTimeCardProps } from '@/interfaces/IWeatherTimeCardProps';

const { items } = defineProps<IWeatherTimeCardProps>();

</script>

<style lang="scss">
.weather-time-card {
  display: flex;
  flex-direction: column;

  max-width: 648px;
  width: 100%;

  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 8px;
    align-items: center;

    padding: 13px 0;

    border-bottom:1px solid #E9E9F31A;
  }

  &__time {
    display: flex;
    flex-direction: column;

    .description {
      margin-top: 6px;
    }
  }

  &__temperature {
    font-size: 48px;
    font-weight: 600;
    color: #fff;
  }

  &__icon {
    display: flex;
    align-self: center;

    .state {
      display: flex;
      align-items: center;

      margin-left: 12px;

      color: #fff;
    }
  }

  &__windy, &__humidity, .time, .description, .state {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
}
</style>