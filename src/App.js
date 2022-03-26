import { useState,useRef,useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import colorNames from 'colornames';
import copyImg from './Copy.svg';
import Input from './inputt';



function App() {
  const [color,setColor] = useState('');
  const [hex,setHex] = useState('');
  const [isDark,setisDark] = useState(false)






let isVivible;
const isHexVisivle = (hex)=>{
  if (colorNames(hex)){
    isVivible = true;
    return colorNames(hex);
  }
  else{
    isVivible = false;
  }
};

document.body.style.backgroundColor = color;


const isbackgroundDark = ()=>{
  setisDark(!isDark)
}

 
  return (
  <CopyToClipboard text={isHexVisivle(hex)}>
      <div className='parent' style={{color: isDark?'white':'black'}}>
       <Input
       useEffect={useEffect}
       useRef={useRef}
       setHex={setHex}
       color={color}
       setColor={setColor}
       />
        <div className='copy' style={{display: isVivible?'flex':'none'}}><h1 >{isHexVisivle(hex)}</h1> <button className='copyIconBtn' style={{backgroundColor:  isDark?'white':'transparent'}}><img src={copyImg}  alt='copyIcon'/></button></div>
        <button className='toggleBtn' onClick={isbackgroundDark}>Toggle text</button>
      </div>
  </CopyToClipboard>
  );

  }


export default App;
