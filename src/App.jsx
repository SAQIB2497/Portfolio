import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Show splash for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
