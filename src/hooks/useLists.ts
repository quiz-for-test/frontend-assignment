"use client";
import { itemState } from "@/interfaces/listItem";
import useListsStore from "@/stores/lists";

const useLists = () => {
  const { lists, selectedItem, selectedLists, unSelectedItem } =
    useListsStore();
  const onClickHandler = (list: itemState) => {
    list.expired = getTimeStamp(5);
    selectedItem(list);
  };

  const getTimeStamp = (plusSeconds: number = 0) => {
    const currentTimestamp = new Date();
    currentTimestamp.setSeconds(currentTimestamp.getSeconds() + plusSeconds);
    return currentTimestamp.getTime();
  };

  const autoUnSelected = () => {
    if (selectedLists.length === 0) return null;
    for (const list of selectedLists) {
      if (list?.expired !== undefined && list?.expired <= getTimeStamp()) {
        unSelectedItem(list);
        return null;
      }
    }
  };
  return {
    lists,
    onClickHandler,
    selectedLists,
    autoUnSelected,
  };
};

export default useLists;
