import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";


const PixelTracker = () => {
    useEffect(() => {
      const pixelId = "668538532566082";
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }, []);
    return null;
  };
  export default PixelTracker;