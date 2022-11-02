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
          <Route path="/Payback-Plan" element={<Home />} />
          <Route path="/Payback-Plan/budget" element={<Budget />} />
          <Route
            path="/Payback-Plan/expense-graph"
            element={<ExpenseGraph />}
          />
          <Route
            path="/Payback-Plan/take-home"
            element={<TakeHomePayCalculator />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
