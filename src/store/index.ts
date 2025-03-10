import type { ICity } from '@/interfaces/ICity';
import type { IHourlyWeather } from '@/interfaces/IHourlyWeather';
import type { IWeather } from '@/interfaces/IWeather';
import type { IWeatherState } from '@/interfaces/IWeatherState';
import type { IWeeklyWeather } from '@/interfaces/IWeeklyWeather';
import { createStore } from 'vuex';


export default createStore<IWeatherState>({
  state: {
    cities: null,
    currentCity: null,
    currentWeather: null,
    weeklyWeather: null,
    weathers: null,
    hourlyWeather: null,
  },
  mutations: {
    SET_CURRENT_WEATHER(state: IWeatherState, payload: IHourlyWeather) {
      state.currentWeather = payload;
    },
    SET_WEEKLY_WEATHER(state: IWeatherState, payload: IWeeklyWeather[]) {
      state.weeklyWeather = payload;
    },
    SET_HORLY_WEATHER(state: IWeatherState, payload: IHourlyWeather[]) {
      state.hourlyWeather = payload;
    },
    SET_WEATHERS(state: IWeatherState, payload: IWeather[]) {
      state.weathers = payload;
    },
    SET_CURRENT_CITY(state: IWeatherState, payload: ICity) {
      state.currentCity = payload;
    },
    SET_CITIES(state: IWeatherState, payload: ICity[]) {
      state.cities = payload;
    },
  },
  actions: {
    setCurrentCity({ commit }, city) {
      commit('SET_CURRENT_CITY', city);
    },
    setCities({ commit }, cities) {
      commit('SET_CITIES', cities);
    },
    setWeathers({ commit }, weathers) {
      commit('SET_WEATHERS', weathers)
    },
    setCurrentWeather({ commit }, currentWeathers) {
      commit('SET_CURRENT_WEATHER', currentWeathers);
    },
    setHorlyWeather({ commit }, currentWeathers) {
      commit('SET_HORLY_WEATHER', currentWeathers);
    },
    setWeeklyWeather({ commit }, currentWeathers) {
      commit('SET_WEEKLY_WEATHER', currentWeathers);
    },
  },
  getters: {
    getCurrentWeather: (state: IWeatherState) => state.currentWeather,
    getWeeklyWeather: (state: IWeatherState) => state.weeklyWeather,
    getCurrentCity: (state: IWeatherState) => state.currentCity,
    getCities: (state: IWeatherState) => state.cities,
    getWeathers: ( state: IWeatherState) => state.weathers,
    getHorlyWeathers: (state: IWeatherState) => state.hourlyWeather,
  },
});
