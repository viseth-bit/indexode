import { useState } from "react";
import ColorButton from "./ColorButton";
import Logo from "./Logo";


function App() {
  const cls3="#f23f2f";
  const [color, setColor] = useState("#D62AB4");
  const ChangeColor =( color)=>{
console.log(color);
setColor(color);
  }
  return (
    <div className="App-header">
      <Logo  cls3={color}/>
      <ColorButton ChangeColor={ChangeColor} color={color} />
    </div>
  );
}
export default App;
