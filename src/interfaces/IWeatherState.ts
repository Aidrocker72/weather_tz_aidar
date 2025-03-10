import type { IWeeklyWeather } from "@/interfaces/IWeeklyWeather";
import type { ICity } from "./ICity";
import type { IWeather } from "./IWeather";
import type { IHourlyWeather } from "./IHourlyWeather";

export interface IWeatherState {
  cities: ICity[] | null;
  currentCity: ICity | null;
  currentWeather: IHourlyWeather | null;
  hourlyWeather: IHourlyWeather [] | null;
  weeklyWeather: IWeeklyWeather[] | null;
  weathers: IWeather[] | null;
}