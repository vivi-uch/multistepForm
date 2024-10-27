import Header from "../Header";

function Summary({ handleBack, handleNext }) {
  return (
    <div className="flex flex-col gap-6 px-20 my-9 w-full">
      <Header
        heading="Finishing up"
        info="Double-check everything looks OK before confirming"
      />
      <div className="flex justify-between items-baseline">
        <a className="text-coolGray cursor-pointer" onClick={handleBack}>
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
    </div>
  );
}

export default Summary;
