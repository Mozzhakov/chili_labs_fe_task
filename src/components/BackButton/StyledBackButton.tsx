import { styled } from "styled-components";
import { GoArrowLeft } from "react-icons/go";

export const StyledBackButtonIcon = styled(GoArrowLeft)`
  width: 25px;
  height: 25px;
  color: #000;
`;

export const StyledBackButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50px;
  background-color: #d3d3d3;
  font-family: inherit;
  @media (min-width: 992px) {
    top: 15px;
    left: 15px;
  }
  &:hover {
    background-color: #0096ff;
    ${StyledBackButtonIcon} {
      color: #fff;
    }
  }
`;
