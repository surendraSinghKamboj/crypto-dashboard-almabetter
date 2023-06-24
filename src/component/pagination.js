import { useState } from 'react';

export const usePagination = (data, dataPerPage) => {
  const totalPages = Math.ceil(data.length / dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  return {
    currentPage,
    totalPages,
    currentData,
    handlePreviousPage,
    handleNextPage,
  };
};
