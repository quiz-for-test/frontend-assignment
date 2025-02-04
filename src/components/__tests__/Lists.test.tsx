import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Lists from "../Lists";
import useLists from "@/hooks/useLists";
import useInterval from "@/hooks/useInterval";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useLists");
jest.mock("../../hooks/useInterval");

describe("Lists component", () => {
  it("renders a div with a list of buttons", () => {
    const lists = [{ name: "List 1" }, { name: "List 2" }];
    (useLists as jest.Mock).mockReturnValue({
      lists,
      onClickHandler: jest.fn(),
      autoUnSelected: jest.fn(),
    });
    const { getByText } = render(<Lists />);
    expect(getByText("List 1")).toBeInTheDocument();
    expect(getByText("List 2")).toBeInTheDocument();
  });

  it("each button calls the onClickHandler function when clicked", () => {
    const lists = [{ name: "List 1" }, { name: "List 2" }];
    const onClickHandler = jest.fn();
    (useLists as jest.Mock).mockReturnValue({
      lists,
      onClickHandler,
      autoUnSelected: jest.fn(),
    });
    const { getAllByRole } = render(<Lists />);
    const buttons = getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledWith(lists[0]);
  });

  it("the autoUnSelected function is called every 5000ms when expiredTime is valid", async () => {
    const autoUnSelected = jest.fn();
    (useLists as jest.Mock).mockReturnValue({
      lists: [],
      onClickHandler: jest.fn(),
      autoUnSelected,
      expiredTime: 1000, // valid expiredTime
    });
    (useInterval as jest.Mock).mockImplementation((fn, interval) => {
      fn();
      global.setTimeout(fn, interval);
    });
    render(<Lists />);
    await waitFor(() => expect(autoUnSelected).toHaveBeenCalledTimes(1));
  });

  it("the autoUnSelected function is not called when expiredTime is invalid", async () => {
    const autoUnSelected = jest.fn();
    (useLists as jest.Mock).mockReturnValue({
      lists: [],
      onClickHandler: jest.fn(),
      autoUnSelected,
      expiredTime: null, // invalid expiredTime
    });
    (useInterval as jest.Mock).mockImplementation((fn, interval) => {
      fn();
      global.setTimeout(fn, interval);
    });
    render(<Lists />);
    await waitFor(() => expect(autoUnSelected).not.toHaveBeenCalled());
  });
});
