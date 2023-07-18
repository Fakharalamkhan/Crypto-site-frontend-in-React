import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import UserEnter from "./pages/Screen1/UserEnter"
import Generate from "./pages/Screen2/pages/Generate";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Welcome to the Home Page";
        break;
      case "/generate":
        title = "Generate Page";
        metaDescription = "This is the Generate Page";
        break;
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    ) as HTMLMetaElement; // Cast the type to HTMLMetaElement

    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserEnter />} />
      <Route path="/generate" element={<Generate />} />
      {/* Add more routes for other pages if needed */}
    </Routes>
  );
}

export default App;
