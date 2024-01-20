import React from "react";
import Banner from "./Banner";
import "./banner.css";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Banner component", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    expect(container).toBeTruthy();
  });

  it(" should render the correct title", () => {
    const { getByText } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it(" should render without title", () => {
    const { queryByText } = render(
      <Banner image="test-image.jpg" alt="Test Alt" />
    );
    expect(queryByText("Test Title")).toBeNull();
  });
});
