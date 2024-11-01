import Header from "../Header";
import Button from "../Button";

function Summary({ handleBack, handleNext, selected, monthly, currView }) {
  return (
    <div className="flex flex-col gap-6 px-20 my-9 w-full">
      <Header
        heading="Finishing up"
        info="Double-check everything looks OK before confirming"
      />

      <div className="bg-lightBlue p-4"></div>

      <Button
        handleBack={handleBack}
        currView={currView}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Summary;
