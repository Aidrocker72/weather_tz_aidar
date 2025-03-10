import type { IWeather } from "@/interfaces/IWeather";

export interface IFetchWeatherDto {
  status: number;
  data: IWeather[];
}