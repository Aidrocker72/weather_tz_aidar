import type { IHourlyWeather } from "@/interfaces/IHourlyWeather";
import type { IWeeklyWeather } from "@/interfaces/IWeeklyWeather";

export interface IWeather {
  id: number;
  name: string;
  average_temp: number;
  humidity: number;
  label: string;
  hourly_weather: IHourlyWeather[];
  weekly_weather: IWeeklyWeather[];
}