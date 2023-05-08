import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const useIsMobileTablet = () => {
  const [isMobileTablet, setIsMobileTablet] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileTablet(window.innerWidth < 768);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileTablet;
};

export { useIsMobileTablet };

export default useIsMobile;
