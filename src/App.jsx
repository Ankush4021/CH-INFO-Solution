import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return <AppRouter />;
};

export default App;
