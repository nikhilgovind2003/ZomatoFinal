import "./App.css";
import HomeLayoutHOC from "./HOC/Home.HOC.js";
import HomeLayout from "./Layout/Home.Layout.js";
import HomePage from "./Pages/HomePage.js";
import Navbar from "./Components/Navbar/Navbar.js";
function App() {
  return (
    <>
      <HomeLayout />
        {/* <HomeLayoutHOC path="/" exact element={<HomePage />} /> */}
        {/* <HomeLayoutHOC path="/delivery" exact element={<Temp />} /> */}
      {/* </HomeLayout> */}
    </>
  );
}

export default App;
