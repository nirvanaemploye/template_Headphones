import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="container flex justify-center space-x-4 mt-6 text-black">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4  text-white ${
          currentPage === 1 ? " cursor-not-allowed" : ""
        }`}
      >
        <IoIosArrowBack className="text-black/80 text-2xl" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`p-1 px-3  text-lg ${
            currentPage === index + 1 ? "bg-primary text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-1 rounded-full ${
          currentPage === totalPages ? " cursor-not-allowed" : " text-white"
        }`}
      >
        <IoIosArrowForward className="text-black/80 text-2xl" />

      </button>
    </div>
  );
};

export default Pagination;