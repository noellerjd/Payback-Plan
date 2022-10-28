import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/fonts.css";

import Home from "./pages/Home";
import Budget from "./pages/Budget";
import { ExpenseGraph } from "./pages/ExpenseGraph";
import TakeHomePayCalculator from "./pages/TakeHomeCalculator";

import Header from "./component/Header";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/expense-graph" element={<ExpenseGraph />} />
          <Route path="/take-home" element={<TakeHomePayCalculator />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
