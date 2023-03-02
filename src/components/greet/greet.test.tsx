import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("GREET renders correctly", () => {
  render(<Greet />);

  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

test("GREET renders with a name", () => {
  render(<Greet name="hema" />);
  const text = screen.getByText(/hello hema/i);
  expect(text).toBeInTheDocument();
});
