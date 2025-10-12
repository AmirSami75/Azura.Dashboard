import { useEffect, useState } from "react";

type viewportSize = {
  width: number;
  height: number;
};
// به دست اوردن سایز صفحه در هر بار تغییر سایز صفحه
const useViewportSize = (): viewportSize => {
  const [size, setSize] = useState<viewportSize>({
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    // تنظیم مقدار اولیه
    handleResize();
    // تنظیم در زمان تغییر سایز صفحه
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

export default useViewportSize;
