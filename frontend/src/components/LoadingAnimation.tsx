import  { useState, useEffect } from "react";
import { assets } from '../assets/assets'
import GetStarted from "./GetStarted";



function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };
    initializeApp();
  }, []);

 

  return (
    <div className="dark:bg-gray-900 h-screen flex  items-center justify-center">
      {isLoading ? (
        <div
          id="loading-icon"
          className="flex flex-col items-center animate-pulse dark:bg-gray-900 gap-4"
        >
          <img
            src={assets.ZingoLogo}
            alt="Loading Icon"
            className="w:32 md:w-60 h-32 md:h-60 object-contain"
          />
          <h1 className="text-3xl text-gray-500 font-bold">Zingo</h1>
        </div>
      ) : (
        <GetStarted />
      )}
    </div>
  );
}

export default LoadingAnimation;