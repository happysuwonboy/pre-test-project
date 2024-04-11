import { create } from 'zustand';

interface Store {
  searchQuery : string;
  showMoreCount : number;
  scrollTop : number;
  setSearchQuery : (inputText : string) => void;
  setShowMoreCount : (cnt : number) => void;
  setScrollTop : (pixel : number) => void;
}

const useSearchStore = create<Store>((set, get) => ({
  searchQuery : '',
  showMoreCount : 0,
  scrollTop : 0,
  setSearchQuery : (inputText : string) => set((state) => ({searchQuery : inputText})),
  setShowMoreCount : (cnt : number) => set((state) => ({showMoreCount : cnt})),
  setScrollTop : (pixel  : number) => set((state) => ({scrollTop : pixel}))
}))

export default useSearchStore;