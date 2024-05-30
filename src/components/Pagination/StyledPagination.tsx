import { styled } from "styled-components";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledPaginationButton = styled.button<{ $isactive: boolean }>`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${({ $isactive }) => ($isactive ? "#0096FF" : "	#D3D3D3")};
  color: white;
  cursor: pointer;
  font-family: inherit;
`;
