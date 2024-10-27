import AddOns from "./components/Pages/AddOns";
import Personal from "./components/Pages/Personal";
import Plan from "./components/Pages/Plan";
import Sidebar from "./components/sidebar";
import Summary from "./components/Pages/Summary";
import { useState } from "react";

function App() {
  const [currView, setCurrentView] = useState(1);
  const [isMonth, setIsMonth] = useState("true");
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  function handleView(num) {
    setCurrentView(num);
  }
  const handleClick = () => {
    setIsMonth(!isMonth);
  };

  function handleSelected(num) {
    setSelected(num);
  }

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }

  function handleNext(num) {
    setCurrentView((num) => num + 1);
  }

  function handleBack(num) {
    setCurrentView((num) => num - 1);
  }

  return (
    // <div className="flex justify-center h-screen items-center">
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 flex flex-col md:flex-row rounded-xl shadow-lg bg-white w-[900px]">
        <Sidebar handleView={handleView} currView={currView} />
        {currView === 1 && <Personal handleNext={handleNext} />}
        {currView === 2 && (
          <Plan
            isMonth={isMonth}
            handleClick={handleClick}
            handleSelected={handleSelected}
            selected={selected}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {currView === 3 && (
          <AddOns
            isMonth={isMonth}
            isChecked={isChecked}
            handleCheckbox={handleCheckbox}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {currView === 4 && (
          <Summary handleNext={handleNext} handleBack={handleBack} />
        )}
        {currView === 5 && "Submit"}
      </div>
    </div>
  );
}

export default App;
