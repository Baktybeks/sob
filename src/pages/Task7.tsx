import { useEffect, useRef, useState } from "react";

export const Task7 = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
    </div>
  );
};

export const Task8 = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // ref для input
  const countRef = useRef(0); // ref для счётчика

  countRef.current += 1;
  console.log("Сколько раз рендерился:", countRef.current);

  useEffect(() => {
    console.log(inputRef.current); // <input ... />
    inputRef.current?.focus(); // поставить фокус на input (если он существует)
  }, []);

  return <input ref={inputRef} />;
};
