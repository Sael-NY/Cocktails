import './App.css';
import MealsListCocktatils from './pages/MealsListCocktails';
import MealsListRandom from './pages/MealsListRandom';
import HappyMeal from './pages/HappyMeal';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HappyMeal" element={<HappyMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
