import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";
import { Container, PaginationButton } from "./styles";

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number | string) => void;
}

const Pagination: React.FC<IProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pageNumbers = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 2) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage >= totalPages - 1) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return (
    <Container>
      {currentPage > 1 && (
        <>
          <PaginationButton
            title="Primeira Página"
            onClick={() => onPageChange(1)}
          >
            <FaAngleDoubleLeft />
          </PaginationButton>

          <PaginationButton
            title="Página Anterior"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <FaAngleLeft />
          </PaginationButton>
        </>
      )}

      <div>
        {pageNumbers.map((page) => (
          <PaginationButton
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationButton>
        ))}
      </div>

      {currentPage < totalPages && (
        <>
          <PaginationButton
            title="Próxima Página"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <FaAngleRight />
          </PaginationButton>

          <PaginationButton
            title="Última Página"
            onClick={() => onPageChange(totalPages)}
          >
            <FaAngleDoubleRight />
          </PaginationButton>
        </>
      )}
    </Container>
  );
};

export default Pagination;
