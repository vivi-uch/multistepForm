function Button({ handleBack, currView, handleNext }) {
  return (
    <div className="flex justify-between items-baseline">
      <a
        className={`text-coolGray cursor-pointer ${
          currView === 1 ? "text-white cursor-not-allowed" : ""
        }`}
        onClick={handleBack}
      >
        Go back
      </a>
      <div className="flex justify-end mt-9 items-center">
        <button
          className="bg-marineBlue rounded px-6 py-2 text-magnolia"
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
export default Button;
