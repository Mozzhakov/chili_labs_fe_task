import styled from "styled-components";

export const StyledFilterInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
  font-family: inherit;
  margin: 0 0 50px 0;
  max-width: 320px;
  @media (min-width: 768px) {
    width: 500px;
    max-width: none;
    margin: 50px 0 50px 0;
  }
  @media (min-width: 992px) {
    width: 600px;
    margin: 100px 0 50px 0;
  }
`;
