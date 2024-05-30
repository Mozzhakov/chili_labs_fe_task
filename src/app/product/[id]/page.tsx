"use client";
import { ProductItem } from "@/components/ProductItem/ProductItem";

const ProductPage = ({ params }: { params: { id: string } }) => {
  return <ProductItem id={params.id} />;
};
export default ProductPage;
