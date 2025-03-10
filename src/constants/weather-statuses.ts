import type { IWeatherStatus } from "@/interfaces/IWeatherStatus";

export const WEATHER_STATUSES: IWeatherStatus[] = [
  { id: 1, name: 'Cloudy', label: 'Облачно' },
  { id: 2, name: 'Rainy', label: 'Дождливо' },
  { id: 3, name: 'Sunny', label: 'Солннечно' },
  { id: 4, name: 'Windy', label: 'Ветренно' },
];