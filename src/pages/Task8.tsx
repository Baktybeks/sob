import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [isToggled, setToggle] = useState(initialState);

  const toggle = () => setToggle((prev) => !prev);

  return [isToggled, toggle, setToggle] as const;
};

export const ToggleComponent = () => {
  const [isToggled, toggle, setToggle] = useToggle(false);
  return (
    <div>
      <p>Состояние: {isToggled ? "Включено" : "Выключено"}</p>
      <button onClick={toggle}>Переключить</button>
      <button onClick={() => setToggle(true)}>Включить</button>
      <button onClick={() => setToggle(false)}>Выключить</button>
    </div>
  );
};
