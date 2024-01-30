import { Route, Routes } from "react-router-dom";
import { FavoriteCatsAsync } from "./pages/Favorire/FavoriteCats.async";
import { AllCatsAsync } from "./pages/AllCats/AllCats.async";
import { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.scss";

function App(): JSX.Element {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCatsAsync />} />
          <Route path="/favorite" element={<FavoriteCatsAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
