"use client";

import { createPlanetsStore } from "@/app/_store/store";
import { PlanetsStore } from "@/app/_store/types";
import React, {
  type ReactNode,
  createContext,
  useRef,
  useContext,
} from "react";
import { type StoreApi, useStore } from "zustand";

const PlanetsStoreContext = createContext<StoreApi<PlanetsStore> | null>(null);

export interface PlanetsStoreProviderProps {
  children: ReactNode;
}

export const PlanetsStoreProvider: React.FC<PlanetsStoreProviderProps> = ({
  children,
}) => {
  const storeRef = useRef<StoreApi<PlanetsStore>>();
  if (!storeRef.current) {
    storeRef.current = createPlanetsStore();
  }

  storeRef.current.getState().fetchPlanets(undefined)

  return (
    <PlanetsStoreContext.Provider value={storeRef.current}>
      {children}
    </PlanetsStoreContext.Provider>
  );
};

export const usePlanetsStore = <T,>(
  selector: (store: PlanetsStore) => T
): T => {
  const planetsStoreContext: StoreApi<PlanetsStore> | null =
    useContext(PlanetsStoreContext);

  if (!planetsStoreContext) {
    throw new Error(`usePlanetsStore must be used within PlanetsStoreProvider`);
  }

  return useStore<StoreApi<PlanetsStore>, T>(planetsStoreContext, selector);
};
