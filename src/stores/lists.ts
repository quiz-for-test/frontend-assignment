import { create } from "zustand";
import jsonData from "../json/initialJson.json";
import { itemState, ListState } from "@/interfaces/listItem";

const useListsStore = create<ListState>((set) => ({
  lists: jsonData,
  selectedLists: [],
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
}));

export default useListsStore;
