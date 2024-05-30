import { IProduct } from "@/types/Product";
import { StyledProductList } from "./StyledProductList";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};
