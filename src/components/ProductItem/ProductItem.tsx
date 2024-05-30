import { IProduct } from "@/types/Product";
import { Loader } from "../Loader/Loader";
import { BackButton } from "../BackButton/BackButton";
import {
  StyledProductItemWrap,
  StyledProductItemImage,
  StyledProductItemBrand,
  StyledProductItemCategory,
  StyledProductItemDescription,
  StyledProductItemPrice,
  StyledProductTextWrap,
  StyledProductItemName,
} from "./StyledProductItem";
import { useState, useEffect } from "react";

interface ProductItemProps {
  id: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ id }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const { title, images, price, rating, description, category, brand } =
    product;
  return (
    <StyledProductItemWrap>
      <BackButton />
      <StyledProductItemImage
        src={images[0]}
        alt={title}
        width={500}
        height={500}
        priority={true}
      />
      <StyledProductTextWrap>
        <StyledProductItemBrand>
          {brand || "Brand unknown"}
        </StyledProductItemBrand>
        <StyledProductItemName>{title}</StyledProductItemName>
        <StyledProductItemPrice>€{price}</StyledProductItemPrice>
        <StyledProductItemDescription>
          {description}
        </StyledProductItemDescription>
        <StyledProductItemCategory>{category}</StyledProductItemCategory>
      </StyledProductTextWrap>
    </StyledProductItemWrap>
  );
};
