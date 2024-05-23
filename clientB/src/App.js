import "./App.css";
import HomeLayoutHOC from "./HOC/Home.HOC.js";
import HomeLayout from "./Layout/Home.Layout.js";
import HomePage from "./Pages/HomePage.js";
import Home from "./Pages/Home.js";
function App() {
  return (
    <>
      <HomeLayout >
        <HomeLayoutHOC path="/" exact element={<Home />} /> 
         <HomeLayoutHOC path="/delivery" exact element={< HomePage />} /> 
       </HomeLayout>
    </>
  );
}

export default App;
