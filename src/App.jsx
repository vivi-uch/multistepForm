import AddOns from "./components/Pages/AddOns";
import Personal from "./components/Pages/Personal";
import Plan from "./components/Pages/Plan";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
  const [currView, setCurrentView] = useState(1);
  const [isMonth, setIsMonth] = useState("true");
  const [selected, setSelected] = useState(null);

  function handleView(num) {
    setCurrentView(num);
  }
  const handleClick = () => {
    setIsMonth(!isMonth);
  };

  function handleSelected(num) {
    setSelected(num);
  }

  return (
    // <div className="flex justify-center h-screen items-center">
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 flex flex-col md:flex-row rounded-xl shadow-lg bg-white w-[900px]">
        <Sidebar handleView={handleView} currView={currView} />
        {currView === 1 && <Personal />}
        {currView === 2 && (
          <Plan
            isMonth={isMonth}
            handleClick={handleClick}
            handleSelected={handleSelected}
            selected={selected}
          />
        )}
        {currView === 3 && <AddOns isMonth={isMonth} />}
        {currView === 4 && "Components4"}
        {currView === 5 && "Submit"}
      </div>
    </div>
  );
}

export default App;
