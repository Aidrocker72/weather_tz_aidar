<template>
<div class="popular-weather">
  <ui-title title="Погода в популярных городах" />

  <div class="popular-weather__container">
    <weather-day-card  
      v-for="{id, label, average_temp, humidity } in weathers" 
      :key="id" 
      card-type="primary"
    >
      <template #title>
        <div class="popular-weather__title">
          <div class="city">
            {{ label }}
          </div>
        </div>
      </template>

      <template #temp>
        <div class="popular-weather__temp">
          {{ average_temp }}°
        </div>
      </template>

      <template #hum>
        <div class="popular-weather__hum">
          Влажность: {{ humidity }}%
        </div>
      </template>
    </weather-day-card>
  </div>
</div>

</template>

<script lang="ts" setup>
import UiTitle from '@/components/Ui/Title/ui-title.vue';
import WeatherDayCard from '@/components/WeatherDayCard/weather-day-card.vue';
import type { IWeather } from '@/interfaces/IWeather';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const weathers = computed<IWeather[]>(() => store.getters.getWeathers);
</script>

<style lang="scss">
.popular-weather {
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) { 
    display: none;
  }

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    overflow-x: auto;
    margin-top: 32px;

    color: #fff;
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .city {
    font-size: 26px;
    font-weight: 600;
  }

  .state {
    font-size: 18px;
    font-weight: 500;
  }
  &__temp {
    font-size: 48px;
    font-weight: 600;
  }
}
</style>