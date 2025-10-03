import { useEffect, useState } from "react";

function A({ children }) {
  console.log("A");
  return children;
}

function B() {
  console.log("B");
  return <C />;
}

function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

export const Task5 = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((state) => state + 1);
  }, []);

  console.log("App");

  return (
    <div>
      <A>
        <B />
      </A>
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
