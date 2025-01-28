"use client";
import useInterval from "@/hooks/useInterval";
import Button from "./Button";
import useLists from "@/hooks/useLists";

const Lists = () => {
  const { lists, onClickHandler, autoUnSelected } = useLists();

  useInterval(() => {
    autoUnSelected();
  }, 1000);

  return (
    <div>
      {lists.map((list) => (
        <Button
          name={list.name}
          key={list.name}
          onClick={() => onClickHandler(list)}
        />
      ))}
    </div>
  );
};

export default Lists;
