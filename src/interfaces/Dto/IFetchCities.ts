import type { ICity } from "@/interfaces/ICity";

export interface IFetchCities {
  status: number,
  data: ICity[];
}