import { useState } from "react";
import Header from "../Header";

function AddOns({ isMonth, handleNext, handleBack }) {
  const checkData = [
    {
      heading: "Online service",
      para: "Access to multiplayer games",
      yearly: 10,
      monthly: 1,
    },
    {
      heading: "Larger Storage",
      para: "Extra 1TB of cloud save",
      yearly: 20,
      monthly: 1,
    },
    {
      heading: "Customizable Profile",
      para: "Custom theme on your profile",
      yearly: 20,
      monthly: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-6 px-20 my-9 w-full">
      <Header
        heading="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />

      {checkData.map((data) => (
        <CheckCard
          key={data.heading}
          heading={data.heading}
          monthly={data.monthly}
          yearly={data.yearly}
          para={data.para}
          isMonth={isMonth}
        />
      ))}
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

export default AddOns;

function CheckCard({ heading, para, isMonth, monthly, yearly }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckbox() {
    setIsChecked(!isChecked);
  }
  return (
    <div
      className={`flex p-4 border border-coolGray rounded-md justify-between items-center ${
        isChecked ? "border-purplishBlue bg-magnolia border-[1.5px]" : ""
      }`}
    >
      <div className="flex gap-5">
        <input
          type="checkbox"
          className="w-4"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <div className="flex flex-col text-sm">
          <p className="font-bold text-marineBlue">{heading}</p>
          <p className="text-coolGray font-semibold">{para}</p>
        </div>
      </div>

      <p className=" text-pastelBlue font-bold">
        {isMonth ? `+$${monthly}/mo` : `+$${yearly}/yr`}
      </p>
    </div>
  );
}
