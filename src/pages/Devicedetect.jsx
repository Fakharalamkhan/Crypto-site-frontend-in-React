// useDeviceDetect.js (Custom Hook)
import { useState, useEffect } from 'react';

function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    }

    // Initially check the device type on component mount
    handleResize();

    // Add event listener for window resize to update the device type dynamically
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useDeviceDetect;
