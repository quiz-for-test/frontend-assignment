"use client";
import { itemState } from "@/interfaces/listItem";
import useListsStore from "@/stores/lists";

const useLists = () => {
  const {
    lists,
    selectedItem,
    selectedLists,
    unSelectedItem,
    expiredTime,
    setExpiredTime,
  } = useListsStore();
  const onClickHandler = (list: itemState) => {
    setExpiredTime();
    selectedItem(list);
  };

  const autoUnSelected = () => {
    if (selectedLists.length === 0) return null;
    for (const list of selectedLists) {
      unSelectedItem(list);
      // return null;
    }
  };
  return {
    lists,
    onClickHandler,
    selectedLists,
    autoUnSelected,
    expiredTime,
  };
};

export default useLists;
