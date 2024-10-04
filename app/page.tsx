"use client";
import { useState, useEffect } from "react";

const shades = ["bg-orange-100", "bg-orange-300", "bg-orange-500"];

export default function Home() {
  const [currentShades, setCurrentShades] = useState([0, 1, 2]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentShades((prevShades) => [
        prevShades[2] % 3,
        prevShades[0] % 3,
        prevShades[1] % 3,
      ]);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="px-5 py-2 flex justify-between items-center bg-orange-500 h-20">
        <h1 className="text-4xl text-black font-semibold">amar nath</h1>
        <nav className="flex list-none gap-4 text-black font-semibold">
          <li>about me</li>
          <li>projects</li>
          <li>contact</li>
        </nav>
      </div>
      <div className="text-9xl text-center text-black">
        <h1 className={`${shades[currentShades[0]]}`}>Hello World</h1>
        <h1 className={` ${shades[currentShades[1]]}`}>Hello World</h1>
        <h1 className={`${shades[currentShades[2]]}`}>Hello World</h1>
        <h1 className={`${shades[currentShades[0]]}`}>Hello World</h1>
        <h1 className={` ${shades[currentShades[1]]}`}>Hello World</h1>
        <h1 className={`${shades[currentShades[2]]}`}>Hello World</h1>
      </div>
    </div>
  );
}
