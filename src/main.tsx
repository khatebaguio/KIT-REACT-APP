import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import GuestLayout from "@/pages/guest/layout";
import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import HobbiesPage from "@/pages/guest/hobbies";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);