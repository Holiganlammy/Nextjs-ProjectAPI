import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

test("Homepage", () => {
  render(<HomePage />);
  expect(screen.getByText("Homepage")).toBeDefined();
});
