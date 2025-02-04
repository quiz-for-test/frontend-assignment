"use client";
import useInterval from "@/hooks/useInterval";
import Button from "./Button";
import useLists from "@/hooks/useLists";
import { getTimeStamp } from "@/utils/time";

const Lists = () => {
  const { lists, onClickHandler, autoUnSelected, expiredTime } = useLists();

  useInterval(() => {
    if (expiredTime && expiredTime < getTimeStamp()) {
      autoUnSelected();
    }
  }, 5000);

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
