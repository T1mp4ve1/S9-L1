// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MyNewComponent from "./assets/components/MyNewComponent";
import MyNewClassComp from "./assets/components/MyNewClassComp";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <MyNewComponent customTitle="TITOLO PERSONALIZZATO" myNumber={100} />
    <MyNewClassComp customTitle="TITOLO classe" myNumber={150} />
    </>
  );
}

export default App;