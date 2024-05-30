import { styled } from "styled-components";
import Image from "next/image";

export const StyledProductItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  max-width: 400px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px #dfdfdf;
  position: relative;
  @media (min-width: 768px) {
    height: 750px;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 20px;
    max-width: none;
    height: 600px;
    padding: 20px;
  }
`;

export const StyledProductTextWrap = styled.div`
  @media (min-width: 992px) {
    width: 500px;
  }
`;

export const StyledProductItemImage = styled(Image)`
  width: 280px;
  height: 300px;
  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
export const StyledProductItemBrand = styled.p`
  color: #d3d3d3;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const StyledProductItemName = styled.h1`
  @media (min-width: 992px) {
    font-size: 40px;
  }
`;
export const StyledProductItemPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-top: 10px;
  @media (min-width: 992px) {
    font-size: 30px;
  }
`;
export const StyledProductItemCategory = styled.p`
  font-style: italic;
  color: #d3d3d3;
  margin-top: 10px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
export const StyledProductItemDescription = styled.p`
  margin-top: 10px;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`;
