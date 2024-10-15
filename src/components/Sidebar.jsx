import { useState } from "react";

function Sidebar({ handleView, currView }) {
  const SideInfo = [
    {
      num: 1,
      info: "Your info",
    },
    {
      num: 2,
      info: "Select Plan",
    },
    {
      num: 3,
      info: "Add-ons",
    },
    {
      num: 4,
      info: "Summary",
    },
  ];

  return (
    <div className="w-60 rounded-lg flex flex-row md:flex-col md:gap-8 lg:bg-cover bg-contain bg-center bg-[url('/assets/images/bg-sidebar-mobile.svg')] lg:bg-[url('/assets/images/bg-sidebar-desktop.svg')] px-8 py-12">
      {SideInfo.map((side) => (
        <Number
          num={side.num}
          info={side.info}
          key={side.num}
          handleView={handleView}
          currView={currView}
        />
      ))}
    </div>
  );
}

export default Sidebar;

const Number = ({ num, info, handleView, currView }) => {
  return (
    <div className="flex gap-3 text-white items-center">
      <div className="flex">
        <button
          onClick={() => handleView(num)}
          className={`px-3 py-1 rounded-full border-2 border-lightGray font-bold ${
            currView === num ? "bg-lightBlue text-black" : ""
          } `}
        >
          {num}
        </button>
      </div>
      <div className="hidden md:flex flex-col gap-1">
        <p className="font-semibold uppercase text-coolGray">{`Step ${num}`}</p>
        <p className="uppercase font-bold text-lightGray">{info}</p>
      </div>
    </div>
  );
};
