import { create } from "zustand";
import jsonData from "../json/initialJson.json";
import { itemState, ListState } from "@/interfaces/listItem";
import { getTimeStamp } from "@/utils/time";

const useListsStore = create<ListState>((set) => ({
  lists: jsonData,
  selectedLists: [],
  expiredTime: 0,
  selectedItem: (item: itemState) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.name !== item.name),
      selectedLists: [...state.selectedLists, item],
    })),
  unSelectedItem: (item: itemState) =>
    set((state) => ({
      lists: [...state.lists, item],
      selectedLists: state.selectedLists.filter(
        (list) => list.name !== item.name
      ),
    })),
  setExpiredTime: () => set({ expiredTime: getTimeStamp(5) }),
}));

export default useListsStore;
