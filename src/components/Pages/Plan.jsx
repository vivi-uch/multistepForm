import Header from "../Header";

function Plan({ selected, handleSelected, isMonth, handleClick }) {
  const cardData = [
    {
      valueM: 9,
      valueY: 90,
      source: "/assets/images/icon-arcade.svg",
      monthly: "Arcade",
      num: 1,
    },
    {
      source: "/assets/images/icon-advanced.svg",
      valueM: 12,
      valueY: 120,
      monthly: "Advanced",
      num: 2,
    },
    {
      source: "/assets/images/icon-pro.svg",
      valueM: 15,
      valueY: 150,
      monthly: "Pro",
      num: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-7 px-20 my-9 w-full">
      <Header
        heading="Select your plan"
        info="You have the option of monthly or yearly billing"
      />
      <div className="flex space-x-2">
        {cardData.map((card, index) => (
          <Card
            monthly={card.monthly}
            source={card.source}
            valueY={card.valueY}
            key={index}
            isMonth={isMonth}
            handleSelected={handleSelected}
            valueM={card.valueM}
            num={card.num}
            selected={selected}
            value={card.value}
          />
        ))}
      </div>
      <div className="flex justify-center items-center p-2 bg-lightGray rounded gap-6 mb-8">
        <p>Monthly</p>
        <div>
          <button
            onClick={handleClick}
            className={`flex bg-marineBlue w-12 px-[4px] py-[5px] rounded-2xl justify-start ${
              !isMonth ? "justify-end" : ""
            }`}
          >
            <span className="flex rounded-full p-2 bg-white"></span>
          </button>
        </div>
        <p>Yearly</p>
      </div>
      <div className="flex justify-between items-baseline">
        <a className="text-coolGray">Go back</a>
        <div className="flex justify-end mt-9 items-center">
          <button className="bg-marineBlue rounded px-6 py-2 text-magnolia">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

function Card({
  source,
  monthly,
  valueM,
  isMonth,
  valueY,
  num,
  handleSelected,
  selected,
}) {
  return (
    <button
      onClick={() => handleSelected(num)}
      className={`flex flex-col w-3/4 rounded-lg border border-coolGray p-4 gap-y-8 ${
        selected == num ? "border-purplishBlue bg-magnolia border-[1.5px]" : ""
      }`}
    >
      <div>
        <img src={source} alt={monthly} />
      </div>
      <div>
        <p className="text-marineBlue font-bold text-left">{monthly}</p>
        <p className="text-coolGray text-left">
          {isMonth ? `$${valueM}/mo` : `$${valueY}/yr`}
        </p>
        {!isMonth && (
          <p className="text-marineBlue text-sm text-left">2 months free</p>
        )}
      </div>
    </button>
  );
}
export default Plan;
