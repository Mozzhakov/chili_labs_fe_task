import Image from "next/image";
import { IProduct } from "@/types/Product";
import {
  StyledProductCard,
  StyledProductCardLink,
  StyledProductCardTitle,
  StyledProductCardSubtitle,
  StyledProductCardParagraph,
  StyledProductCardRatingWrap,
  StyledProductCardBottomPanel,
  StyledProductCardFaStar,
} from "./StyledProductCard";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncatedString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return (
        <>
          {str.slice(0, maxLength)}
          ...
        </>
      );
    }
  };

  return (
    <StyledProductCard>
      <StyledProductCardLink href={`/product/${product.id}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            width={200}
            height={200}
            priority={true}
          />
          <StyledProductCardTitle>
            {truncatedString(product.title, 18)}
          </StyledProductCardTitle>
          <StyledProductCardSubtitle>
            {product.category}
          </StyledProductCardSubtitle>
        </div>
        <StyledProductCardBottomPanel>
          <StyledProductCardParagraph>
            €{product.price}
          </StyledProductCardParagraph>
          <StyledProductCardRatingWrap>
            <StyledProductCardParagraph>
              {product.rating}
            </StyledProductCardParagraph>
            <StyledProductCardFaStar />
          </StyledProductCardRatingWrap>
        </StyledProductCardBottomPanel>
      </StyledProductCardLink>
    </StyledProductCard>
  );
};
