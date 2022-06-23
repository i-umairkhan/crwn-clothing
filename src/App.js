import Home from "./Routes/Home/Home.Component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.Component.jsx";

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
