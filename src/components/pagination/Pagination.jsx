import "./Pagination.css";
import { useState } from "react";
const Pagination = ({ _currentPage, totalPages, onPageChange, isLoading}) => {
 
    const [currentPage, setCurrentPage] = useState(_currentPage);
  const handlePrev = () => {
    if (currentPage > 1 && !isLoading) {
        setCurrentPage(currentPage-1)
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !isLoading) {
        setCurrentPage(currentPage+1)
        onPageChange(currentPage +1);
    }
  };

 
  if(totalPages)
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={handlePrev}
        disabled={currentPage === 1 || isLoading}
      >
        Prev
      </button>
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={handleNext}
        disabled={currentPage === totalPages || isLoading}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
