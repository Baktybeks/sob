import { memo, useEffect, useState } from "react";

function A() {
  console.log("A");
  return <B />;
}

const B = memo(() => {
  console.log("B");
  return <C />;
});
function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

export const Task4 = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((state) => state + 1);
  }, []);

  console.log("App");

  return (
    <div>
      <A />
      <D />
    </div>
  );
};

//App
//A
//B
//C
//D
//App
//A
//D
