import { styled } from "styled-components";
import { FaStar } from "react-icons/fa6";

export const StyledProductCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: auto;
  }
  @media (min-width: 992px) {
  }
`;

export const StyledProductCardImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledProductCardLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  height: 350px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px #dfdfdf;
  &:hover {
    transform: scale(1.01);
  }
  @media (min-width: 768px) {
    width: 240px;
  }
  @media (min-width: 992px) {
  }
`;

export const StyledProductCardTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  @media (min-width: 768px) {
    /* width: 200px; */
  }
  @media (min-width: 992px) {
  }
`;

export const StyledProductCardSubtitle = styled.p`
  width: 100%;
  font-size: 16px;
  color: #d3d3d3;
  margin-top: 5px;
`;

export const StyledProductCardParagraph = styled.p`
  font-size: 18px;
`;

export const StyledProductCardRatingWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const StyledProductCardBottomPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledProductCardFaStar = styled(FaStar)`
  color: gold;
  font-size: 20px;
`;
