import { itemState } from "@/interfaces/listItem";
import useListsStore from "@/stores/lists";
import { useMemo } from "react";

const useSelectedLists = (type: string) => {
  const { selectedLists, unSelectedItem } = useListsStore();

  const listSelected = useMemo(() => {
    return selectedLists.filter((list) => list.type === type);
  }, [selectedLists, type]);

  const onClickHandler = (list: itemState) => {
    unSelectedItem(list);
  };

  return {
    onClickHandler,
    listSelected,
  };
};

export default useSelectedLists;
