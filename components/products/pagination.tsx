import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalResults,
  resultsPerPage,
  onPageChange,
}: PaginationProps) {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className='bg-white px-6 py-4 border-t border-gray-200'>
      <div className='flex items-center justify-between'>
        {/* Results Info */}
        <div className='text-sm text-gray-600'>
          Showing {startResult}-{endResult} of {totalResults} results
        </div>

        {/* Pagination Controls */}
        <div className='flex items-center gap-2'>
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Page Numbers */}
          <div className='flex items-center gap-1'>
            {getVisiblePages().map((page, index) => (
              <div key={index}>
                {page === "..." ? (
                  <span className='px-3 py-2 text-gray-500'>...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(page as number)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      page === currentPage
                        ? "bg-green-600 text-white"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
