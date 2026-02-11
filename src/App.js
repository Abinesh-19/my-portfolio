import React, { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => setLoading(false);

  return (
    <ThemeProvider>
      {loading ? (
        <PageLoader onFinish={handleLoaderFinish} />
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen">
            <Home />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
