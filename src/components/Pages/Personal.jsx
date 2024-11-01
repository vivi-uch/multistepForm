import Header from "../Header";
import Button from "../Button";

function Personal({ handleNext, handleBack, currView }) {
  const personalInfo = [
    {
      name: "Name",
      placeholder: "e.g. Stephen King",
    },
    {
      name: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      name: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <div className="flex flex-col gap-7 px-20 my-9 w-full">
      <Header
        info="Please provide your name, email address, and phone number."
        heading="Personal Info"
      />
      <form className="flex flex-col gap-4">
        {personalInfo.map((info) => (
          <LabelInputs
            key={info.name}
            name={info.name}
            placeholder={info.placeholder}
          />
        ))}
      </form>
      <Button
        handleBack={handleBack}
        currView={currView}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Personal;

function LabelInputs({ placeholder, name }) {
  return (
    <form className="flex flex-col gap-2">
      <label className="text-marineBlue font-bold">{name}</label>
      <input
        type="text"
        className="rounded px-4 py-2 border border-coolGray text-coolGray font-semibold"
        placeholder={placeholder}
      />
    </form>
  );
}
