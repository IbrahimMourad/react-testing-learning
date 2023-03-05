import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText(/all fields are mandatory/i);
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
});
