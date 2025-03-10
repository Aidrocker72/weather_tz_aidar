<template>
  <div class="weather-icon">
    <CloudyIcon v-bind="$attrs" v-if="name === 'cloudy'"/>
    <SunnyIcon v-bind="$attrs" v-else-if="name === 'sunny'"/>
    <WindyIcon v-bind="$attrs" v-else-if="name === 'windy'"/>
    <RainyIcon v-bind="$attrs" v-else-if="name === 'rainy'"/>
  </div>
</template>

<script lang="ts" setup>
import type { IWeatherIconProps } from '@/interfaces/IWeatherIconProps';
import CloudyIcon from '@/assets/icons/cloudy-icon.svg';
import SunnyIcon from '@/assets/icons/sunny-icon.svg';
import WindyIcon from '@/assets/icons/windy-icon.svg';
import RainyIcon from '@/assets/icons/rainy-icon.svg';

const { name } = defineProps<IWeatherIconProps>(); 
</script>