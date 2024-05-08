import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css
import "./App.css";

//pages
import Layout from "./pages/Layout";

import RestaurantConsole from "./pages/RestaurantConsole";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<LandingPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/joinAsPartner" element={<JoinAsPartner />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogDetail/:id" element={<BlogSingle />} /> */}

          {/* contact,terms and privacy */}

          {/* <Route path="/termsCondition" element={<TermsCondtion />} /> */}
          {/* <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} /> */}

          {/* First Target Restaurant console */}
          <Route path="/restaurant" element={<RestaurantConsole />} />

          {/* Authentication routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verification" element={<VerifyEmail />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
