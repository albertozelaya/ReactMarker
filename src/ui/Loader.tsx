import { useEffect } from "react";
import Spinner from "./Spinners";

export default function Loader() {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden"); // <- html
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="parent-spinner fixed z-40 bg-gray-100/20 backdrop-blur-sm">
      <Spinner />
    </div>
  );
}
