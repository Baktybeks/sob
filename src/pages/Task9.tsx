import { useEffect } from "react";

function AwesomeMenu({ isValid }) {
  if (isValid) {
    return (
      <div className="container">
        <CoolComponent key="component">123</CoolComponent>
        <ValidControls key="controls" />
      </div>
    );
  }

  return (
    <div className="container">
      {isValid && <ValidControls />}
      <CoolComponent key="component">123</CoolComponent>
    </div>
  );
}

const CoolComponent = ({ children }) => {
  useEffect(() => {
    console.log("CoolComponent Mount");

    return () => console.log("CoolComponent Unmount");
  }, []);

  console.log("CoolComponent Render");

  return <div>{children}</div>;
};

// function AwesomeMenu({ isValid }) {
//   if (isValid) {
//     return <div className="container">
//       <CoolComponent key="component">123</CoolComponent>
//       <ValidControls key="controls" />
//     </div>;
//   }

//   return <div className="container">
//     {isValid && <ValidControls />}
//     <CoolComponent key="component">123</CoolComponent>
//   </div>;
// }

// const CoolComponent = ({ children }) => {
//   useEffect(() => {
//     console.log('CoolComponent Mount');

//     return () => console.log('CoolComponent Unmount');
//   }, []);

//   console.log('CoolComponent Render');

//   return <div>
//     {children}
//   </div>
// }
