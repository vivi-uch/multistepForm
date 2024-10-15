import Personal from "./components/Pages/Personal";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
  const [currView, setCurrentView] = useState(1);

  function handleView(num) {
    setCurrentView(num);
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="p-4 flex flex-col md:flex-row rounded-xl shadow-lg bg-white">
        <Sidebar handleView={handleView} currView={currView} />
        {currView === 1 && <Personal />}
        {currView === 2 && "Components2"}
        {currView === 3 && "Components3"}
        {currView === 4 && "Components4"}
        {currView === 5 && "Submit"}
      </div>
    </div>
  );
}

export default App;
