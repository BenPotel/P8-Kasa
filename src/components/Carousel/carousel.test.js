import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel"; // Update the path accordingly

describe("Carousel component", () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  it("renders with initial state and updates correctly", () => {
    const { getByAltText, getByText } = render(<Carousel images={images} />);

    // Initial state
    expect(getByAltText("Slide 1")).toBeInTheDocument();
    expect(getByText("1/3")).toBeInTheDocument();

    // Click next button
    fireEvent.click(document.querySelector(".right_arrow"));
    expect(getByAltText("Slide 2")).toBeInTheDocument();
    expect(getByText("2/3")).toBeInTheDocument();

    // Click previous button
    fireEvent.click(document.querySelector(".left_arrow"));
    expect(getByAltText("Slide 1")).toBeInTheDocument();
    expect(getByText("1/3")).toBeInTheDocument();
  });
});
