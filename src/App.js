import { useState,useRef,useEffect} from 'react';
import colorNames from 'colornames';
import copyImg from './Copy.svg';
import Input from './inputt';
import Result from './Result';



function App() {
  const [color,setColor] = useState('');
  const [hex,setHex] = useState(null);
  const [isDark,setisDark] = useState(false)
  const [isVivible,setIsVivible] = useState(false)

document.body.style.backgroundColor = color;

const isbackgroundDark = ()=>{
  setisDark(!isDark);
}

const copyText = ()=>{
  navigator.clipboard.writeText(hex)
}

 
  return (
  
      <div  style={{color: isDark?'white':'black'}}>
       <Input
       useEffect={useEffect}
       useRef={useRef}
       setHex={setHex}
       color={color}
       setColor={setColor}
       hex={hex}
       setIsVivible={setIsVivible}
       colorNames={colorNames}
       />
      <Result 
      isVivible={isVivible}
      hex={hex}
      isDark={isDark}
      copyImg={copyImg}
      isbackgroundDark={isbackgroundDark}
      copyText={copyText}
      />
      </div>
 
  );

  }


export default App;
