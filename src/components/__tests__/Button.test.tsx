import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("renders with correct name", async () => {
    const name = "Test Button";
    const testId = "button";
    render(<Button name={name} onClick={() => {}} />);
    const button = await screen.getByTestId(testId);
    expect(button).not.toBeNull();
  });

  it("calls onClick handler when clicked", async () => {
    const onClick = jest.fn();
    const testId = "button";
    render(<Button name="Test Button" onClick={onClick} />);
    const button = screen.getByTestId(testId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
