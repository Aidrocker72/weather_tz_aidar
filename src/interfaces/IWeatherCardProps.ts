import type { IHourlyWeather } from "./IHourlyWeather";

export interface IWeatherCardProps {
  currentWeather: IHourlyWeather | null;
}