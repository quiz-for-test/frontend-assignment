"use client";
import useListsStore from "@/stores/lists";
import { useMemo } from "react";
import Button from "./Button";
import { itemState } from "@/interfaces/listItem";
import useSelectedLists from "@/hooks/useSelectedLists";

const SelectedList = ({ type }: { type: string }) => {
  const { listSelected, onClickHandler } = useSelectedLists(type);

  return (
    <>
      <div className=" border text-center bg-[#EEEEEE] p-2 mt-1">
        <p>{type}</p>
      </div>
      <div className="border border-t-0 h-[500px] p-2">
        {listSelected.map((list) => (
          <Button
            name={list.name}
            key={list.name}
            onClick={() => onClickHandler(list)}
          />
        ))}
      </div>
    </>
  );
};

export default SelectedList;
