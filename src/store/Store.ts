import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQuery;

export interface gameStore {
  background_image?: string;
  title?: string;
  height?: number;
  width?: number;
  top?: number;
  left?: number;
  y?: number;
  x?: number;
}

interface GameStoreQuery {
  game: gameStore;
  setBackground_image: (url: string) => void;
  title: (url: string) => void;
  setHeight: (value: number) => void;
  setWidth: (value: number) => void;
  setTop: (value: number) => void;
  setLeft: (value: number) => void;
  setY: (value: number) => void;
  setX: (value: number) => void;
}
export const useGameStore = create<GameStoreQuery>((set) => ({
  game: {},
  setBackground_image: (url) =>
    set((state) => ({ game: { ...state.game, background_image: url } })),
  title: (url) => set((state) => ({ game: { ...state.game, title: url } })),
  setHeight: (value) =>
    set((state) => ({ game: { ...state.game, height: value } })),
  setWidth: (value) =>
    set((state) => ({ game: { ...state.game, width: value } })),
  setTop: (value) => set((state) => ({ game: { ...state.game, top: value } })),
  setLeft: (value) =>
    set((state) => ({ game: { ...state.game, left: value } })),
  setY: (value) => set((state) => ({ game: { ...state.game, y: value } })),
  setX: (value) => set((state) => ({ game: { ...state.game, x: value } })),
}));

interface linkState {
  fromHome?: boolean;
}

interface linkStateQuery {
  state: linkState;
  setFromHome: (value: boolean) => void;
}

export const uselinkState = create<linkStateQuery>((set) => ({
  state: {},
  setFromHome: (value) =>
    set((state) => ({ state: { ...state.state, fromHome: value } })),
}));
