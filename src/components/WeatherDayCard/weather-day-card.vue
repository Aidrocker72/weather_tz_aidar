<template>
  <div 
    class="weather-day-card"
    :class="[
      `weather-day-card--${cardType}`,
    ]"
  >
    <div class="weaher-day-card__title" v-if="slots['title']">
      <slot name="title" />
    </div>

    <weather-icon 
      width="60px" 
      height="60px" 
      :name="iconType" 
      class="weather-day-card__icon" 
    />

    <div class="weather-day-card__temp" v-if="slots['temp']">
      <slot name="temp" />
    </div>

    <div class="weather-day-card__hum" v-if="slots['hum']">
      <slot name="hum" />
    </div>
  </div>
</template>


<script lang="ts" setup>
import WeatherIcon from '@/components/WeatherIcon/weather-icon.vue';
import type { IWeatherDayCardProps } from '@/interfaces/IWeatherDayCardProps';
import { useSlots } from 'vue';

const slots = useSlots();
const { cardType = 'default', iconType = 'sunny' } = defineProps<IWeatherDayCardProps>();
</script>

<style lang="scss">
.weather-day-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__temp, &__hum {
    margin-top: 17px;
  }

  &__icon {
    margin-top: 5px;
  }

  &--primary {
    padding: 25px 26px;
    border-radius: 8px;
    max-width: 242px;
    width: 100%;

    background: #E9E9F31A;
  }
}
</style>