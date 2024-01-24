import React from "react";
import Banner from "./Banner";
import "./banner.css";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Banner component", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    expect(container).toBeTruthy();
  });

  it("should render the correct title", () => {
    const { getByText } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("should render without title", () => {
    const { queryByText } = render(
      <Banner image="test-image.jpg" alt="Test Alt" />
    );
    expect(queryByText("Test Title")).toBeNull();
  });

  it("should apply the 'banner' class", () => {
    const { getByTestId } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    const bannerComponent = getByTestId("banner-component");
    expect(bannerComponent).toHaveClass("banner");
  });

  it("should apply the 'text_overlay' class", () => {
    const { getByTestId } = render(
      <Banner image="test-image.jpg" alt="Test Alt" title="Test Title" />
    );
    const textOverlay = getByTestId("text-overlay");
    expect(textOverlay).toHaveClass("text_overlay");
  });
});
