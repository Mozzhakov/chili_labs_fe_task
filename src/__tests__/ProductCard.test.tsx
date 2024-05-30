import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IProduct } from "@/types/Product";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} />
));

describe("ProductCard", () => {
  const product: IProduct = {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Product 1",
    brand: "Brand 1",
    category: "Category 1",
    images: ["image1.jpg"],
    rating: 4.5,
  };

  it("renders product card correctly", () => {
    const { getByText, getByAltText } = render(
      <ProductCard product={product} />
    );

    // Check if title, category, price, and rating are rendered correctly
    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Category 1")).toBeInTheDocument();
    expect(getByText("€10")).toBeInTheDocument();
    expect(getByText("4.5")).toBeInTheDocument();

    // Check if image alt text is correct
    expect(getByAltText("Product 1")).toBeInTheDocument();
  });

  it("truncates long titles correctly", () => {
    const longTitleProduct: IProduct = {
      ...product,
      title: "Eyeshadow Palette with Mirror",
    };
    const { getByText } = render(<ProductCard product={longTitleProduct} />);

    // Check if the title is truncated correctly
    expect(getByText("Eyeshadow Palette ...")).toBeInTheDocument();
  });
});
