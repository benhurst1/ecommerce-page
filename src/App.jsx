import Header from "./components/Header";
import ItemPreview from "./components/ItemPreview";
import MainDisplay from "./components/MainDisplay";
import MobileNavigation from "./components/MobileNavigation";

function App() {

  return (
    <main>
      <div className="w-screen h-screen lg:px-20 sm:px-15 flex flex-col items-center z-0 relative transition-all duration-300 ease-in-out ">
        <Header />
        <MainDisplay />
        <ItemPreview />
        <MobileNavigation />
      </div>
    </main>
  );
}

export default App;
