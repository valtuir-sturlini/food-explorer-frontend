import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewDish } from "../pages/NewDish";
import { Details } from "../pages/Details";
import { EditDish } from "../pages/EditDish";
import { Cart } from "../pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  );
}
