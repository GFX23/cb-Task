export type StoreState = {
  planets: Paginated<Planet>;
}

export type StoreActions = {
  setPlanets: (planets: Paginated<Planet>) => void
  fetchPlanets: (url: string | undefined) => void
}

export type PlanetsStore = StoreState & StoreActions

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }

  export type Starship = {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
  }

  export type Paginated<T> = {
    count: number;
    previous: string | null;
    current: string | undefined;
    next: string | null;
    results: T[];
    error: string | null;
  };

  export type PaginatedSSR<T> = {
    count: number;
    previous: string | null;
    next: string | null;
    results: T[];

  };

