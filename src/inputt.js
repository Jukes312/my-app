

const Input = ({useRef,color,setColor,setHex,useEffect}) => {
  const ref = useRef();
  useEffect(()=>{
    ref.current.focus()
    })

  return (

    <section>
        <h1 className='heading'>Color converter</h1>
        <input  ref={ref} value={color} onChange = {(e)=>{setColor(e.target.value);setHex(e.target.value)}} placeholder='Type a color name'></input>
    </section>
  )
}

export default Input