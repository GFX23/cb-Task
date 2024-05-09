import { Paginated, Planet, PlanetsStore, StoreState, } from '@/app/_store/types'
import { createStore } from 'zustand'

export const defaultInitState: StoreState = {
  planets: {
    count: 0,
    previous: null,
    current: undefined,
    next: null,
    results: [],
    error: null
  },
}

export const getPlanetsData = async (url = 'https://swapi.dev/api/planets/?page=1'): Promise<Paginated<Planet>> => {
  const response = await fetch(url)

  if (!response.ok) {
    return {
      ...defaultInitState.planets, error: "Failed to fetch data from SWAPI",
    }
  }

  const data = await response.json()
  return {...data, error: null, current: url}
}


export const createPlanetsStore = (
  initState: StoreState = defaultInitState,
) => {
  return createStore<PlanetsStore>()((set) => ({
    ...initState,
    setPlanets: (planets) => set({ planets }),
    fetchPlanets: async (url) => {
      const planets = await getPlanetsData(url)
      set({ planets })
    }
  }))
}
