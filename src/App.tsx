import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="scroll-smooth mb:p-6 tb:pt-8 tb:px-12 dk:pt-14 dk:px-28">
      <Navigation />
      <Home />
      <Aboutme />
    </div>
  );
}

export default App;
