import { useState } from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      {/* <div className="absolute h-full w-full bg-black opacity-50">Hello</div> */}
      <div className="w-screen px-20 flex flex-col items-center">
        <Header />
        <MainDisplay setIsOpen={openDialog} />
      </div>
    </main>
  );
}

export default App;
