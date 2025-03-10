import mockData from '@/assets/files/cities.json';
import mocWeatgerData from '@/assets/files/weather.json';
import type { IFetchCities } from '@/interfaces/Dto/IFetchCities';
import type { IFetchWeatherDto } from '@/interfaces/Dto/IFetchWeatherDto';

export const fetchCities = (): Promise<IFetchCities> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockData), 1000);
  });
};

export const fetchWeather = (): Promise<IFetchWeatherDto> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mocWeatgerData), 1000);
  });
};