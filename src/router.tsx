import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import Customers from "./components/pages/Customers";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/products" element={<Products/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;