import { useState,useRef,useEffect} from 'react';
import colorNames from 'colornames';
import copyImg from './Copy.svg';
import Input from './inputt';
import Result from './Result';



function App() {
  const [color,setColor] = useState('');
  const [hex,setHex] = useState(null);
  const [isDark,setisDark] = useState(false)
  const [isVisible,setIsVisible] = useState(false)

document.body.style.backgroundColor = color;

const isbackgroundDark = ()=>{
  setisDark(!isDark);
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
       setIsVisible={setIsVisible}
       colorNames={colorNames}
       />
      <Result 
      isVisible={isVisible}
      hex={hex}
      isDark={isDark}
      copyImg={copyImg}
      isbackgroundDark={isbackgroundDark}
      
      />
      </div>
 
  );

  }


export default App;
