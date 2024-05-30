import {
  StyledPaginationWrapper,
  StyledPaginationButton,
} from "./StyledPagination";

interface IPagination {
  productsPerPage: number;
  length: number;
  handlePagination: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<IPagination> = ({
  productsPerPage,
  length,
  handlePagination,
  currentPage,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <StyledPaginationWrapper>
      {paginationNumbers.map((data) => (
        <StyledPaginationButton
          key={data}
          onClick={() => handlePagination(data)}
          $isactive={currentPage === data}
        >
          {data}
        </StyledPaginationButton>
      ))}
    </StyledPaginationWrapper>
  );
};
