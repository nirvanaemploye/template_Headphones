const PrimaryButton = ({ children, className = "" }) => {
    return (
      <button
        className={`bg-primary text-white rounded-lg lg:py-4 lg:px-12 py-2 px-4 mt-4 font-semibold text-base mx-auto lg:mx-0 mb-12 lg:mb-0 hover:bg-white hover:text-primary border border-primary transition duration-300 ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default PrimaryButton;
  