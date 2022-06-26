import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.Component.jsx";
import Navigation from "./Routes/Navigation/Navigation.Component.jsx";
import Authentication from "./Routes/Authentication/Authentication.Component.jsx";

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
