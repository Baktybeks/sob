import { useEffect, useState } from "react";

const fetchRandomNumber = () => Promise.resolve(Math.random());

export const Task2 = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchRandomNumber();
      setNumber(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const scrollF = () => setScroll(window.scrollY);
    window.addEventListener("scroll", scrollF);
    return () => {
      window.removeEventListener("scroll", scrollF);
    };
  }, []);

  return (
    <>
      <div className="number"> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </>
  );
};

// import React from "react";

// const fetchRandomNumber = () => Promise.resolve(Math.random());

// export const NumberAndScroll = () => {
//   const [number, setNumber] = useState();
//   const [scroll, setScroll] = useState();

//   useEffect(async () => {
//     setNumber(await fetchRandomNumber());

//     window.addEventListener("scroll", () => setScroll(window.scrollY));

//     return () => {
//       window.removeEventListener("scroll", () => setScroll(window.scrollY));
//     };
//   });

//   return (
//     <div className='number'> Number: {number} </div>
//     <div> Scroll: {scroll} </div>
//   );
// };
